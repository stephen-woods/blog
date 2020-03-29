import React from "react"
import Layout from "../components/layout"
import style from "../pages/resume.module.css"
import { graphql } from "gatsby"

export default (props) => {

  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return <Layout location={props.location} title={siteTitle}>
    <div>
      <div className={style.resumeOuter}>
        <h2>RESUME</h2>
        <div className={style.resumeCard}>
          Download PDF
        </div>
        <div className={style.resumeCard}>
          <div className={style.resumeHeader1}>
            Professional Profile
          </div>
          <div className={style.resumeProfile}>
            Highly skilled lead software engineer/architect with 24 years of progressive experience designing and
            implementing software systems using numerous complementary technologies and polyglot programming paradigms.
            Extensive experience in scalable enterprise web application development and technical leadership for large
            reactive projects. Very fast learner with excellent communication and mentoring skills. Team player with
            proven ability to successfully deliver premium class software on time and within budget.
          </div>
          <div className={style.resumeHeader1}>
            Skills and Experience
          </div>

        </div>
        <div className={style.resumeCard}>
          <div className={style.resumeHeader1}>
            Work History
          </div>

          <company>
            <name>Altara Systems, LLC</name>
            <dates>2000 - Present</dates>
            <location>Vienna, VA</location>
          </company>
          <company>
            <position>Founder and Principal Member</position>
            <url>http://www.altarasystems.com</url>
          </company>


          <client>
            <name>Comcast ComPASS Labs</name>
            <position>Contractor - Technical Lead for Runtime Systems Search/Browse</position>
            <summary>
              <ul>
                <li>Lead the multi-year design and implementation effort for Comcast’s content discovery platform
                  providing the ability to discover movies, series, episodes, bundles, teams, sports, leagues, bands,
                  companies, stations, menus, and people across both video on demand and linear TV mediums filtered by
                  continuously changing time window and individual customer entitlements.
                </li>
                <li>
                  Championed conversion effort from <a href="https://subversion.apache.org/">Subversion</a> to
                  <a href="https://git-scm.com/">Git</a> for entire DC office of 100 developers,
                  researchers, and operations staff (
                  <a href="https://www.atlassian.com/software/bitbucket">Atlassian Stash</a>,
                  <a href="https://about.gitlab.com">GitLab</a>,
                  <a href="https://github.com/enterprise">GitHub Enterprise.</a>).
                </li>
                <li>Established continuous integration and artifact releases (
                  <a href="https://maven.apache.org">Maven</a>,
                  <a href="https://www.scala-sbt.org/">SBT</a>,
                  <a href="https://jfrog.com/artifactory/">Artifactory</a>,
                  <a href="https://www.atlassian.com/software/bamboo">Atlassian Bamboo</a>,
                  <a href="https://jenkins.io/">Jenkins</a>,
                  <a href="https://www.sonarqube.org/">SonarQube</a>).
                </li>
                <li>Helped manage Rancher based Kubernetes clusters hosted in Open Stack used by development and QA
                  teams.
                </li>
                <li>Created numerous custom <a href="https://www.ansible.com/">Ansible</a> roles and playbooks for
                  development, QA, and production purposes.
                </li>
                <li>Created numerous <a href="https://kubernetes.io/">Kubernetes</a> <a
                  href="https://helm.sh/">Helm</a> charts for development, QA, and production purposes.
                </li>
                <li>Created a custom testing framework used by all QA members for fast/parallel
                  functional testing of stateful platform services across multiple stacks deployed in <a href="https://kubernetes.io/">Kubernetes</a> (
                  <a href="https://www.scala-lang.org/">Scala</a>,
                  <a href="http://www.scalatest.org/">ScalaTest</a>,
                  <a href="https://helm.sh/">Helm</a>,
                  <a href="https://zio.dev/">ZIO</a>,
                  <a href="https://www.playframework.com/">Play</a>,
                  <a href="https://www.couchbase.com/products/server">Couchbase</a>,
                  <a href="https://lucene.apache.org/solr/">Solr</a>)
                </li>
              </ul>
            </summary>
            <project>
              <name>Relevance Engine for Xfinity (REX Query Engine)</name>
              <summary>
                A highly customized Apache Solr based search engine that represents the backbone of Comcast’s X1 content
                discovery platform. It is responsible for providing personalized search, browse, and recommendation
                content on set top boxes, web clients, and handheld devices used by 30 million Xfinity customers and the
                customers of partner licensees (Cox, Rogers, Sky, Videotron). 500 - 800 production instances deployed
                across 5 on-premise data centers and 3 Amazon AWS cloud regions depending on time of day.
                <ul>
                  <li>Designed and integrated customized scoring, sorting, and collection capabilities into Solr to
                    provide flexible relevance options using Comcast proprietary relevance algorithms.
                  </li>
                  <li>Designed and implemented non-English preferred language support based on what programs are
                    currently available and what an individual customer is entitled to see.
                  </li>
                  <li>Designed and implemented Apache Solr/Spring integration that allows Solr components to be managed
                    by Spring and avoid class loader issues.
                  </li>
                  <li>Created numerous request handlers and JSON response writers.</li>
                  <li>Created filter query parsers responsible for generating entity and showing core filter cache bit
                    sets for editorial collections, time windows, entitlements, and program availabilities
                  </li>
                  <li>Created a customized filter query parser responsible for performing a high performance “join”
                    across entity, showing, station, channel, and media availability Solr cores required by all REX
                    queries.
                  </li>
                  <li>Created optimized data structures derived from Lucene indexes used at runtime to drastically
                    improve native Solr performance.
                  </li>
                  <li>Created system that continuously downloads ranking data from an external web service to decouple
                    scoring data from Solr core indexes.
                  </li>
                </ul>
              </summary>
            </project>
            <project>
              <name>XNavi</name>
              <summary>
                A high-performance data broker that allows Comcast legacy set top boxes to leverage the search, browse,
                and editorial features of the X1 platform, by managing the coordination of various back end systems in a
                completely non-blocking way.
                <ul>
                  <li>Designed and implemented XML-based request handlers and response writers, as well as several ZIO
                    effect services. (Scala, Play, ZIO, Couchbase, JAXB, Protobuf, RxScala, Caffeine)
                  </li>
                  <li>Created a GoReplay middleware to forward production legacy traffic to development and QA testing
                    instances using test data and filtering out purchase, rent, and session history transactions
                    (Javascript, GoReplay)
                  </li>
                </ul>
              </summary>
            </project>
            <project>
              <name>REX Micro Services (REX-MS)</name>
              <summary>
                A current ongoing greenfield project aimed to design Xfinity’s next generation REX system to address
                scalability issues associated with an ever-increasing Video-on-Demand catalog.
                <ul>
                  <li>Created multiple prototypes and ran performance scenarios using production data and request
                    traffic. (Scala, ZIO, Play, Solr-Cloud, Prometheus, Grafana, Helm, Kubernetes)
                  </li>
                </ul>
              </summary>
            </project>
            <project>
              <name>REX Metadata Service (RMD)</name>
              <summary>
                A high-performance caching layer responsible for providing metadata necessary for rendering REX QE
                responses (media details, credits, menus, images, offers, purchases).
                <ul>
                  <li>Designed and created initial implementation that fetched JSON data from Couchbase, converted it to
                    Thrift binary format, and stored resulting payload in a local Caffeine cache before returning to
                    client. (Scala, Twitter Finagle/Thrift, Zookeeper)
                  </li>
                  <li>Updated RMD to provide GRPC/Protocol Buffer interface for use within Kubernetes cluster</li>
                </ul>
              </summary>
            </project>
            <project>
              <name>MinREX</name>
              <summary>
                A safety net that provides minimal non-personalized, nationally available REX responses if and when the
                REX platform is overloaded during prime time top-of-the-hour spikes (after shows end and customers are
                looking for something else to watch).
                <ul>
                  <li>Designed and implemented the MinREX playback system: a backend streaming system that reads
                    incoming production REX requests from an Apache Kafka topic, replays a modified version of the
                    request, and stores the resulting REX response in a Redis database. The cached responses are then
                    fetched by a MinREX front end client when the REX system is under severe load. (Scala, Akka Streams,
                    Reactive Kafka)
                  </li>
                </ul>
              </summary>
            </project>
          </client>

          <client>
            <name>United States Government Accountability Office (GAO)</name>
            <position>Technical Lead for the GAO Engagement Management System project</position>
            <summary>
              <ul>
                <li>Served as Technical Lead and Scrum Master of a team of five developers.</li>
              </ul>
            </summary>
            <project>
              <name>GAO Engagement Management System (GEMS)</name>
              <summary>
                An enterprise integration project focused on replacing legacy systems that are involved in the managing
                the primary business function of the GAO.
                <ul>
                  <li>Created a Java based library for interfacing the s3270 terminal emulator in order to access legacy
                    applications on the National Finance Center mainframe (s3270, Java Concurrency Library, Groovy for
                    code generation of screen scrapers).
                  </li>
                  <li>Designed and implemented REST services serving semantic JSON messages (JAX-RS, Jackson).</li>
                </ul>
              </summary>
            </project>
          </client>

          <client>
            <name>United States Department of Justice - United States Trustees Program (USTP)</name>
            <position>Java Architect (Subject Matter Expert) / Team Lead for Common Code</position>
            <summary>
              <ul>
                <li>Served as chief software architect for the prime’s multi-vendor software development team of 16
                  developers
                  at USTP on eight concurrent bankruptcy related projects.
                </li>
                <li>Advised and steered the government CIO office on long-term technical strategies.</li>
                <li>Planned and executed numerous software development and production release efforts.</li>
                <li>Wrote all of the Ant build scripts used to build and deploy each application.</li>
              </ul>
            </summary>
            <project>
              <name>Professional Timekeeping System (PTS)</name>
              <summary>A web application for collecting non-payroll timesheet metrics related to the Chapter 7, Chapter
                11, and Chapter 13 activities performed by attorneys, paralegals, clerk staff, and bankruptcy analysts
                throughout the United States Trustee Program.
                <ul>
                  <li>Designed and implemented most of the application including functionality that handles user
                    navigation, page rendering, and database access (JBoss, SQL Server, JSP, Struts, Spring, Castor,
                    AspectJ, jQuery, and Hibernate).
                  </li>
                </ul>
              </summary>
            </project>
            <project>
              <name>Fee Information Collection System (FICS)</name>
              <summary>
                A complete redesign of the accounts receivable system that manages the billing and fees collected from
                all Chapter 11 bankruptcy court cases in the United States. FICS manages roughly $1 million in fee
                transactions every business day and provides the primary funding for the entire United States Trustee
                Program.
                <ul>
                  <li>Designed and implemented most of the web application functionality that handles user navigation,
                    database access, and searching (JBoss, DB2/AS400, JSP, Struts, Spring, Castor, and Hibernate).
                  </li>
                  <li>Designed and implemented complex business logic that determined what fee is assessed for each
                    debtor on a quarterly basis.
                  </li>
                </ul>
              </summary>
            </project>
            <project>
              <name>Means Test Review (MTR)</name>
              <summary>
                A new software solution for determining the presumption of abuse when analyzing a debtor’s means test as
                required by the Bankruptcy Abuse Protection and Consumer Protection Act of 2005.
                <ul>
                  <li>Designed and implemented major portions of the web application and background processes that
                    interface with external and legacy systems (JBoss, DB2/AS400, SQL Server, JSP, Struts, Spring,
                    Castor, ActiveMQ, and Hibernate).
                  </li>
                  <li>Prototyped fully functional search capability using Lucene/Hibernate Search.</li>
                </ul>
              </summary>
            </project>
            <project>
              <name>Credit Counseling/Debtor Education (CCDE) Certificate Generation System (CGS)</name>
              <summary>A software solution for managing the credit counseling and debtor education agency debtor
                certification process as required by the Bankruptcy Abuse Protection and Consumer Protection Act of
                2005.
                <ul>
                  <li>Designed and implemented major portions of the internal web application used to manage all of the
                    companies providing credit counseling and debtor education services (JBoss, DB2/UDB, JSP, Struts,
                    Spring, Hibernate).
                  </li>
                  <li>Completely overhauled the external facing web application responsible for generating certificates
                    signifying the completion of various courses required by the bankruptcy filing process (JBoss,
                    Oracle, JSP, Struts, Spring, Hibernate).
                  </li>
                  <li>Implemented dynamic PDF certificate generation including embedded barcodes using PDFBox and
                    iText.
                  </li>
                </ul>
              </summary>
            </project>
          </client>

          <client>
            <name>Intrado</name>
            <position>Senior Software Consultant</position>
            <project>
              <name>9-1-1 Information Manager</name>
              <summary>9-1-1 call center J2EE application that managed street address change request workflow and
                resulting telephone number/driving direction discrepancies at the municipality level. This application
                was the first of many that combined functionality from legacy SCC and Lucent Public Safety Systems Group
                systems - managing more emergency response data records than any other system in the world. Initial
                customers included Verizon, Pacific Bell, and Southwest Bell. http://www.intrado.com
                <ul>
                  <li>Implemented a flexible web application framework using XML/XSL/JavaScript page rendering
                    techniques in a web portal architecture (Cocoon 2.0, Castor, and Weblogic 6.1).
                  </li>
                  <li>Designed and implemented numerous Cocoon/Castor enabled session EJBs and BMP entity EJBs accessing
                    several legacy databases (Informix 7.3).
                  </li>
                  <li>Designed a versatile XML report framework for generating reports in HTML, PDF, SVG and Excel
                    formats.
                  </li>
                  <li>Designed and implemented a multi-threaded RMI server for scheduling report generation during
                    off-peak hours using a customized version of open-source Quartz scheduling libraries.
                  </li>
                </ul>
              </summary>
            </project>
          </client>

          <client>
            <name>Avolent</name>
            <position>Senior Software Engineer Contractor</position>
            <project>
              <name>J1 Electronic Billing and Interactive Customer Care Platform</name>
              <summary>
                Pure J2EE XML enabled customer care application suite that allowed a company’s customer base to select
                and maintain their own products and services over the Internet while allowing the company to conduct
                business with minimal human interaction. Specific functionality includes: Electronic Billing Presentment
                and Payment, Product Catalog, Order Entry, Trouble Ticketing and Consolidated Billing.
                <ul>
                  <li>Designed the graphic user interface for a desktop administration application used to configure and
                    manage all aspects of the J1 platform. Implemented “admintool” as a Swing based EJB client.
                  </li>
                  <li>Implemented admintool modules to manage configuration and deployment settings, inline
                    advertisement graphics, and the highly customizable XML based permissions and preferences framework.
                  </li>
                </ul>
              </summary>
            </project>
          </client>

        </div>
        <div className={style.resumeCard}>
          <company>
            <name>Lockheed Martin</name>
            <dates>1996 - 1999</dates>
            <location>Owego, NY</location>
          </company>
          <company>
            <position>Sr. Associate Software Developer</position>
            <url>http://www.lockheedmartin.com</url>
          </company>
          <client>
            <summary>
              <ul>
                <li>Researched emerging Internet technologies under the direction of Dr. Keith Werkman.</li>
                <li>Researched emerging distributed computing technologies under the direction of Dr. Will Tracz.</li>
                <li>Created a reuse metrics calculator under the direction of Dr. Jeffrey Poulin for his book
                  Measuring Software Reuse: Principles, Practices, and Economic Models.
                </li>
              </ul>
            </summary>
            <project>
              <name>Battlefield Ministry Tracking and Information System</name>
              <summary>
                Prototype hardware/software solution for use by US Army chaplains on the battlefield to deliver pastoral
                care information back to the sustaining base using a wide range of commercial wireless handheld devices
                (Win32, WinCE, PalmOS, DOS). The success of this project opened the door for Lockheed Martin to win four
                new US Army research contracts.
              </summary>
            </project>
            <project>
              <name>Other Lockheed Martin Achievements</name>
              <summary>
                <ul>
                  <li>Received Lockheed Martin Award of Excellence</li>
                </ul>
              </summary>
            </project>
          </client>
        </div>
      </div>
    </div>
  </Layout>
}

export const pageQuery = graphql`
query {
  site {
  siteMetadata {
  title
}
}
}
`
