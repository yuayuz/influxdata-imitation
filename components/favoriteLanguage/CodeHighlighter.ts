import hljs from "highlight.js"
import "~/assets/css/highlight.css"

const pythonRead: string = `
from influxdb_client_3 import InfluxDBClient3
import pandas
import os

database = os.getenv('INFLUX_DATABASE')
token = os.getenv('INFLUX_TOKEN')
host="https://us-east-1-1.aws.cloud2.influxdata.com"

def querySQL():
  client = InfluxDBClient3(host, database=database, token=token)
  table = client.query(
    '''SELECT
        room,
        DATE_BIN(INTERVAL '1 day', time) AS _time,
        AVG(temp) AS temp,
        AVG(hum) AS hum,
        AVG(co) AS co
      FROM home
      WHERE time >= now() - INTERVAL '90 days'
      GROUP BY room, _time
      ORDER BY _time'''
  )

  print(table.to_pandas().to_markdown())

  client.close()

querySQL()
`
const pythonWrite: string = `
from influxdb_client_3 import InfluxDBClient3
import os

database = os.getenv('INFLUX_DATABASE')
token = os.getenv('INFLUX_TOKEN')
host="https://us-east-1-1.aws.cloud2.influxdata.com"

def write_line_protocol():
client = InfluxDBClient3(host, database=database, token=token)

record = "home,room=Living\\ Room temp=22.2,hum=36.4,co=17i"

print("Writing record:", record )
client.write(record)

client.close()

write_line_protocol()`

const swiftRead: string = `
@main
struct QueryCpuData: AsyncParsableCommand {
  @Option(name: .shortAndLong, help: "The name or id of the bucket destination.")
  private var bucket: String

  @Option(name: .shortAndLong, help: "The name or id of the organization destination.")
  private var org: String

  @Option(name: .shortAndLong, help: "Authentication token.")
  private var token: String

  @Option(name: .shortAndLong, help: "HTTP address of InfluxDB.")
  private var url: String
}

extension QueryCpuData {
  mutating func run() async throws {
    //
    // Initialize Client with default Bucket and Organization
    //
    let client = InfluxDBClient(
            url: url,
            token: token,
            options: InfluxDBClient.InfluxDBOptions(bucket: bucket, org: org))

    // Flux query
    let query = """
                from(bucket: "(self.bucket)")
                    |> range(start: -10m)
                    |> filter(fn: (r) => r["_measurement"] == "cpu")
                    |> filter(fn: (r) => r["cpu"] == "cpu-total")
                    |> filter(fn: (r) => r["_field"] == "usage_user" or r["_field"] == "usage_system")
                    |> last()
                """

    print("\nQuery to execute:\n(query)\n")

    let response = try await client.queryAPI.queryRaw(query: query)

    let csv = String(decoding: response, as: UTF8.self)
    print("InfluxDB response: (csv)")

    client.close()
  }
}
`
const swiftWrite: string = `
import ArgumentParser
import Foundation
import InfluxDBSwift
import InfluxDBSwiftApis

@main
struct WriteData: AsyncParsableCommand {
  @Option(name: .shortAndLong, help: "The name or id of the bucket destination.")
  private var bucket: String

  @Option(name: .shortAndLong, help: "The name or id of the organization destination.")
  private var org: String

  @Option(name: .shortAndLong, help: "Authentication token.")
  private var token: String

  @Option(name: .shortAndLong, help: "HTTP address of InfluxDB.")
  private var url: String
}

extension WriteData {
  mutating func run() async throws {
    //
    // Initialize Client with default Bucket and Organization
    //
    let client = InfluxDBClient(
            url: url,
            token: token,
            options: InfluxDBClient.InfluxDBOptions(bucket: bucket, org: org))

    //
    // Record defined as Data Point
    //
    let recordPoint = InfluxDBClient
            .Point("demo")
            .addTag(key: "type", value: "point")
            .addField(key: "value", value: .int(2))
    //
    // Record defined as Data Point with Timestamp
    //
    let recordPointDate = InfluxDBClient
            .Point("demo")
            .addTag(key: "type", value: "point-timestamp")
            .addField(key: "value", value: .int(2))
            .time(time: .date(Date()))

    try await client.makeWriteAPI().write(points: [recordPoint, recordPointDate])
    print("Written data:\n\n([recordPoint, recordPointDate].map { "\t- ($0)" }.joined(separator: "\n"))")
    print("\nSuccess!")

    client.close()
  }
}
`

const jsRead: string = `
import {InfluxDBClient} from '@influxdata/influxdb3-client'
import {tableFromArrays} from 'apache-arrow';

const database = process.env.INFLUX_DATABASE;
const token = process.env.INFLUX_TOKEN;
const host = "https://us-east-1-1.aws.cloud2.influxdata.com";

async function main() {
    const client = new InfluxDBClient({host, token})
    const query = \`
    SELECT
      room,
      DATE_BIN(INTERVAL '1 day', time) AS _time,
      AVG(temp) AS temp,
      AVG(hum) AS hum,
      AVG(co) AS co
    FROM home
    WHERE time >= now() - INTERVAL '90 days'
    GROUP BY room, _time
    ORDER BY _time
    \`
    const result = await client.query(query, database)

    const data = {room: [], day: [], temp: []}

    for await (const row of result) {
      data.day.push(new Date(row._time).toISOString())
      data.room.push(row.room)
      data.temp.push(row.temp)
    }

    console.table([...tableFromArrays(data)])

    client.close()
}

main()
`
const jsWrite: string = `
import {InfluxDBClient} from '@influxdata/influxdb3-client'

const database = process.env.INFLUX_DATABASE;
const token = process.env.INFLUX_TOKEN;
const host = "https://us-east-1-1.aws.cloud2.influxdata.com";

async function main() {
    const client = new InfluxDBClient({host, token})

    const record = "home,room=Living\\ Room temp=22.2,hum=36.4,co=17i"
    await client.write(record, database)
    client.close()
}

main()
`

const javaRead: string = `
package com.influxdb3.examples;

import com.influxdb.v3.client.InfluxDBClient;
import java.util.stream.Stream;

public final class Query {
    private Query() {
        //not called
    }

    /**
     * @throws Exception
     */
    public static void main() throws Exception {

        final String hostUrl = "https://us-east-1-1.aws.cloud2.influxdata.com";
        final char[] authToken = (System.getenv("INFLUX_TOKEN")).toCharArray();
        final String database = System.getenv("INFLUX_DATABASE");

        try (InfluxDBClient client = InfluxDBClient.getInstance(hostUrl, authToken, database)) {
            String sql = """
                SELECT
                    room,
                    DATE_BIN(INTERVAL '1 day', time) AS _time,
                    AVG(temp) AS temp, AVG(hum) AS hum, AVG(co) AS co
                FROM home
                WHERE time >= now() - INTERVAL '90 days'
                GROUP BY room, _time
                ORDER BY _time""";

            String layoutHeading = "| %-16s | %-12s | %-6s |%n";
            System.out.printf("--------------------------------------------------------%n");
            System.out.printf(layoutHeading, "day", "room", "temp");
            System.out.printf("--------------------------------------------------------%n");

            String layout = "| %-16s | %-12s | %.2f |%n";
            try (Stream stream = client.query(sql)) {
                stream.forEach(row -> System.out.printf(layout, row[1], row[0], row[2]));
            }
        }
    }
}
`
const javaWrite: string = `
package com.influxdb3.examples;

import com.influxdb.v3.client.InfluxDBClient;

public final class Write {

    public static void main() throws Exception {

        final String hostUrl = "https://us-east-1-1.aws.cloud2.influxdata.com";
        final char[] authToken = (System.getenv("INFLUX_TOKEN")).toCharArray();
        final String database = System.getenv("INFLUX_DATABASE");
        try (InfluxDBClient client = InfluxDBClient.getInstance(hostUrl, authToken, database)) {
            String record = "home,room=Living\\ Room temp=22.2,hum=36.4,co=17i";
            System.out.printf("Write record: %s%n", record);
            client.writeRecord(record);
        }
    }
}
`

const rubyRead: string = `
InfluxDB2::Client.use('https://localhost:8086', 'my-token', org: 'my-org') do |client|

  result = client
    .create_query_api
    .query_raw(query: 'from(bucket:"my-bucket") |> range(start: 1970-01-01) |> last()')
  puts result
end
`
const rubyWrite: string = `
InfluxDB2::Client.use('https://localhost:8086', 'my-token',
                      bucket: 'my-bucket',
                      org: 'my-org',
                      precision: InfluxDB2::WritePrecision::NANOSECOND) do |client|

  write_api = client.create_write_api
  write_api.write(data: 'h2o,location=west value=33i 15')
end
`

const scalaRead: string = `
package example

import org.apache.pekko.actor.ActorSystem
import org.apache.pekko.stream.scaladsl.Sink
import com.influxdb.client.scala.InfluxDBClientScalaFactory
import com.influxdb.query.FluxRecord

import scala.concurrent.Await
import scala.concurrent.duration.Duration

object InfluxDB2ScalaExample {

  implicit val system: ActorSystem = ActorSystem("it-tests")

  def main(args: Array[String]): Unit = {

    val influxDBClient = InfluxDBClientScalaFactory
      .create("http://localhost:8086", "my-token".toCharArray, "my-org")

    val fluxQuery = ("from(bucket: "my-bucket")\n"
      + " |> range(start: -1d)"
      + " |> filter(fn: (r) => (r["_measurement"] == "cpu" and r["_field"] == "usage_system"))")

    //Result is returned as a stream
    val results = influxDBClient.getQueryScalaApi().query(fluxQuery)

    //Example of additional result stream processing on client side
    val sink = results
      //filter on client side using \`filter\` built-in operator
      .filter(it => "cpu0" == it.getValueByKey("cpu"))
      //take first 20 records
      .take(20)
      //print results
      .runWith(Sink.foreach[FluxRecord](it => println(s"Measurement: \${it.getMeasurement}, value: \${it.getValue}")
      ))

    // wait to finish
    Await.result(sink, Duration.Inf)

    influxDBClient.close()
    system.terminate()
  }
}
`
const scalaWrite: string = `
package com.influxdb.client.scala.internal

import org.apache.pekko.Done
import org.apache.pekko.stream.scaladsl.{Flow, Keep, Sink, Source}
import com.influxdb.client.InfluxDBClientOptions
import com.influxdb.client.domain.WritePrecision
import com.influxdb.client.internal.{AbstractWriteBlockingClient, AbstractWriteClient}
import com.influxdb.client.scala.WriteScalaApi
import com.influxdb.client.service.WriteService
import com.influxdb.client.write.{Point, WriteParameters}

import javax.annotation.Nonnull
import scala.collection.immutable.ListMap
import scala.concurrent.Future
import scala.jdk.CollectionConverters._

class WriteScalaApiImpl(@Nonnull service: WriteService, @Nonnull options: InfluxDBClientOptions)

  extends AbstractWriteBlockingClient(service, options) with WriteScalaApi {

  override def writeRecord(precision: Option[WritePrecision], bucket: Option[String], org: Option[String]): Sink[String, Future[Done]] = {
    Flow[String]
      .map(record => Seq(new AbstractWriteClient.BatchWriteDataRecord(record)))
      .toMat(Sink.foreach(batch => writeHttp(precision, bucket, org, batch)))(Keep.right)
  }

  override def writeRecords(precision: Option[WritePrecision], bucket: Option[String], org: Option[String]): Sink[Seq[String], Future[Done]] = {
    writeRecords(toWriteParameters(precision, bucket, org))
  }

  override def writeRecords(parameters: WriteParameters): Sink[Seq[String], Future[Done]] = {
    Flow[Seq[String]]
      .map(records => records.map(record => new AbstractWriteClient.BatchWriteDataRecord(record)))
      .toMat(Sink.foreach(batch => writeHttp(parameters, batch)))(Keep.right)
  }


  override def writePoint(bucket: Option[String], org: Option[String]): Sink[Point, Future[Done]] = {
    Flow[Point]
      .map(point => (point.getPrecision, Seq(new AbstractWriteClient.BatchWriteDataPoint(point, options))))
      .toMat(Sink.foreach(batch => writeHttp(Some(batch._1), bucket, org, batch._2)))(Keep.right)
  }

  override def writePoints(bucket: Option[String], org: Option[String]): Sink[Seq[Point], Future[Done]] = {
    writePoints(new WriteParameters(bucket.orNull, org.orNull, null, null))
  }

  override def writePoints(parameters: WriteParameters): Sink[Seq[Point], Future[Done]] = {
    Flow[Seq[Point]]
      // create ordered Map
      .map(records => records.foldRight(ListMap.empty[WritePrecision, Seq[Point]]) {
        case (point, map) => map.updated(point.getPrecision, point +: map.getOrElse(point.getPrecision, Seq()))
      }.toList.reverse)
      .map(grouped => grouped.map(group => (group._1, group._2.map(point => new AbstractWriteClient.BatchWriteDataPoint(point, options)))))
      .flatMapConcat(batches => Source(batches))
      .toMat(Sink.foreach(batch => writeHttp(parameters.copy(batch._1, options), batch._2)))(Keep.right)
  }

  override def writeMeasurement[M](precision: Option[WritePrecision], bucket: Option[String], org: Option[String]): Sink[M, Future[Done]] = {
    Flow[M]
      .map(measurement => {
        val parameters = toWriteParameters(precision, bucket, org)
        Seq(toMeasurementBatch(measurement, parameters.precisionSafe(options)))
      })
      .toMat(Sink.foreach(batch => writeHttp(precision, bucket, org, batch)))(Keep.right)
  }

  override def writeMeasurements[M](precision: Option[WritePrecision], bucket: Option[String], org: Option[String]): Sink[Seq[M], Future[Done]] = {
    writeMeasurements(toWriteParameters(precision, bucket, org))
  }

  override def writeMeasurements[M](parameters: WriteParameters): Sink[Seq[M], Future[Done]] = {
    Flow[Seq[M]]
      .map(records => records.map(record => toMeasurementBatch(record, parameters.precisionSafe(options))))
      .toMat(Sink.foreach(batch => writeHttp(parameters, batch)))(Keep.right)
  }

  private def writeHttp(precision: Option[WritePrecision], bucket: Option[String], org: Option[String], batch: Seq[AbstractWriteClient.BatchWriteData]): Done = {
    writeHttp(toWriteParameters(precision, bucket, org), batch)
  }

  private def writeHttp(parameters: WriteParameters, batch: Seq[AbstractWriteClient.BatchWriteData]): Done = {
    write(parameters, batch.toList.asJava.stream())
    Done.done()
  }

  private def toWriteParameters(precision: Option[WritePrecision], bucket: Option[String], org: Option[String]): WriteParameters = {
    val parameters = new WriteParameters(bucket.orNull, org.orNull, precision.orNull, null)
    parameters.check(options)
    parameters
  }
}
`

const goRead: string = `
package influxdbv3

import (
  "context"
  "fmt"
  "io"
  "os"
  "text/tabwriter"

  "github.com/apache/arrow/go/v12/arrow"
  "github.com/InfluxCommunity/influxdb3-go/influx"
)

func QuerySQL() error {
  url := "https://us-east-1-1.aws.cloud2.influxdata.com"
  token := os.Getenv("INFLUX_TOKEN")
  database := os.Getenv("INFLUX_DATABASE")
	
  client, err := influx.New(influx.Configs{
	HostURL: url,
	AuthToken: token,
  })

  defer func (client *influx.Client)  {
	err := client.Close()
	if err != nil {
		panic(err)
	}
  }(client)

  query := \`
    SELECT
	  room,
	  DATE_BIN(INTERVAL '1 day', time) AS _time,
	  AVG(temp) AS temp,
	  AVG(hum) AS hum,
	  AVG(co) AS co
	FROM home
	WHERE time >= now() - INTERVAL '90 days'
	GROUP BY room, _time
	ORDER BY _time
\`

  iterator, err := client.Query(context.Background(), database, query)

  if err != nil {
    panic(err)
  }

  w := tabwriter.NewWriter(io.Discard, 4, 4, 1, ' ', 0)
  w.Init(os.Stdout, 0, 8, 0, '\t', 0)
  fmt.Fprintln(w, "day\troom\ttemp")

  for iterator.Next() {
	row := iterator.Value()
	day := (row["_time"].(arrow.Timestamp)).ToTime(arrow.TimeUnit(arrow.Nanosecond))
	fmt.Fprintf(w, "%s\t%s\t%.2f\n", day, row["room"], row["temp"])
  }

  w.Flush()
  return nil
}
`
const goWrite: string = `
package influxdbv3

import (
  "context"
  "os"
  "fmt"
  "github.com/InfluxCommunity/influxdb3-go/influx"
)

func WriteLineProtocol() error {
  url := "https://us-east-1-1.aws.cloud2.influxdata.com"
  token := os.Getenv("INFLUX_TOKEN")
  database := os.Getenv("INFLUX_DATABASE")
	
  client, err := influx.New(influx.Configs{
	HostURL: url,
	AuthToken: token,
  })

  defer func (client *influx.Client)  {
	err := client.Close()
	if err != nil {
		panic(err)
	}
  }(client)

  record := "home,room=Living\\ Room temp=22.2,hum=36.4,co=17i"
  fmt.Println("Writing record: ", record)
  err = client.Write(context.Background(), database, []byte(record))

  if err != nil {
    panic(err)
  }
  return nil
}
`

const csharpRead: string = `
using System;
using System.Threading.Tasks;
using InfluxDB3.Client;
using InfluxDB3.Client.Query;

namespace InfluxDBv3;

public class Query
{
  static async Task QuerySQL()
  {
    const string hostUrl = "https://us-east-1-1.aws.cloud2.influxdata.com";
    string? database = System.Environment.GetEnvironmentVariable("INFLUX_DATABASE");
    string? authToken = System.Environment.GetEnvironmentVariable("INFLUX_TOKEN");

    using var client = new InfluxDBClient(hostUrl, authToken: authToken, database: database);
  
    const string sql = @"
      SELECT
        room,
        DATE_BIN(INTERVAL '1 day', time) AS _time,
        AVG(temp) AS temp,
        AVG(hum) AS hum,
        AVG(co) AS co
      FROM home
      WHERE time >= now() - INTERVAL '90 days'
      GROUP BY room, _time
      ORDER BY _time
    ";

    Console.WriteLine("{0,-30}{1,-15}{2,-15}", "day", "room", "temp");
    await foreach (var row in client.Query(query: sql))
    {
      Console.WriteLine("{0,-30}{1,-15}{2,-15}", row[1], row[0], row[2]);
    }

    Console.WriteLine();
  }
}
`
const csharpWrite: string = `
using System;
using System.Threading.Tasks;
using InfluxDB3.Client;
using InfluxDB3.Client.Query;

namespace InfluxDBv3;

public class Write
{
  public static async Task WriteLineProtocol()
  {
    const string hostUrl = "https://us-east-1-1.aws.cloud2.influxdata.com";
    string? database = System.Environment.GetEnvironmentVariable("INFLUX_DATABASE");
    string? authToken = System.Environment.GetEnvironmentVariable("INFLUX_TOKEN");

    using var client = new InfluxDBClient(hostUrl, authToken: authToken, database: database);

    const string record = "home,room=Living\\ Room temp=22.2,hum=36.4,co=17i";
    Console.WriteLine("Write record: {0,-30}", record);
    await client.WriteRecordAsync(record: record);
  }
}
`

const rlangRead: string = `
client <- InfluxDBClient$new(url = "http://localhost:8086",
                             token = "my-token",
                             org = "my-org")
                            
data <- client$query('from(bucket: "my-bucket") |> range(start: -1h) |> drop(columns: ["_start", "_stop"])')
data
`
const rlangWrite: string = `
client <- InfluxDBClient$new(url = "http://localhost:8086",
                             token = "my-token",
                             org = "my-org")
data <- ...
response <- client$write(data, bucket = "my-bucket", precision = "us",
                         measurementCol = "name",
                         tagCols = c("region", "sensor_id"),
                         fieldCols = c("altitude", "temperature"),
                         timeCol = "time")
`
export const pythonWriteHighlightedCode = hljs.highlight(pythonWrite, {
  language: "python",
}).value
export const pythonReadHighlightedCode = hljs.highlight(pythonRead, {
  language: "python",
}).value
export const swiftReadHighlightedCode = hljs.highlight(swiftRead, {
  language: "swift",
}).value
export const swiftWriteHighlightedCode = hljs.highlight(swiftWrite, {
  language: "swift",
}).value
export const jsReadHighlightedCode = hljs.highlight(jsRead, {
  language: "js",
}).value
export const jsWriteHighlightedCode = hljs.highlight(jsWrite, {
  language: "js",
}).value
export const javaReadHighlightedCode = hljs.highlight(javaRead, {
  language: "java",
}).value
export const javaWriteHighlightedCode = hljs.highlight(javaWrite, {
  language: "java",
}).value
export const rubyReadHighlightedCode = hljs.highlight(rubyRead, {
  language: "ruby",
}).value
export const rubyWriteHighlightedCode = hljs.highlight(rubyWrite, {
  language: "ruby",
}).value
export const scalaReadHighlightedCode = hljs.highlight(scalaRead, {
  language: "scala",
}).value
export const scalaWriteHighlightedCode = hljs.highlight(scalaWrite, {
  language: "scala",
}).value
export const goReadHighlightedCode = hljs.highlight(goRead, {
  language: "go",
}).value
export const goWriteHighlightedCode = hljs.highlight(goWrite, {
  language: "go",
}).value
export const csharpReadHighlightedCode = hljs.highlight(csharpRead, {
  language: "csharp",
}).value
export const csharpWriteHighlightedCode = hljs.highlight(csharpWrite, {
  language: "csharp",
}).value
export const rlangReadHighlightedCode = hljs.highlight(rlangRead, {
  language: "r",
}).value
export const rlangWriteHighlightedCode = hljs.highlight(rlangWrite, {
  language: "r",
}).value
