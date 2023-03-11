import React from "react"
import Layout from "../components/layout"
import * as style from "../pages/resume.module.css"
import { graphql } from "gatsby"

const ResumePage = () => {
    const now = new Date()
    const professionalYears = now.getFullYear() - 1996

    return (
        <Layout>
        <div>
            <div className={style.resumeOuter}>
                <div className={style.resumeCard}>
                    <div className={style.resumeHeader1}>
                        Professional Profile
                    </div>
                    <div className={style.resumeProfile}>
                        Highly skilled lead software engineer/architect with {professionalYears} years of progressive experience designing and
                        implementing software systems using numerous complementary technologies and polyglot programming paradigms.
                        Extensive experience in scalable enterprise application development and technical leadership for large
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
                        <url><a href="http://www.altarasystems.com">http://www.altarasystems.com</a></url>
                    </company>

                    <client>
                        <name><a href="https://corporate.comcast.com/company/xfinity">Comcast AI and Discovery Labs</a></name>
                        <position>Technical Lead for Runtime Systems Search/Browse</position>
                        <project>
                            <name>Relevance Engine for Xfinity (REX)</name>
                            <summary>
                                The backbone of Comcast Xfinity's content discovery platform used by all 16.1 million
                                Xfinity video customers and the customers of partner licensees around the world
                                (
                                <a href="https://www.cox.com/">Cox</a>,
                                <a href="https://www.foxtel.com.au/"> FoxTel</a>,
                                <a href="https://www.rogers.com/"> Rogers</a>,
                                <a href="https://www.sky.com/"> Sky</a>,
                                <a href="https://videotron.com/en"> Videotron</a>
                                ) to search or browse for available content on set top boxes, web clients, and handheld
                                devices.
                                <p/>
                                REX provides the capability to search and browse for available on demand and linear content on
                                set top boxes, web clients, and handheld devices filtered by continuously changing time window and
                                individual customer entitlements. Consists of several micro services deployed in multiple kubernetes clusters
                                across a global footprint spanning North America, Europe and Australia.

                                <ul>
                                    <li>Lead a team of 10 developers and 6 testers for the overall design and implementation of latest multi-year development
                                        effort
                                    </li>
                                    <li>Transplanted core of <a href="https://lucene.apache.org/solr/"> Apache Solr</a> from a blocking
                                        <a href="https://www.eclipse.org/jetty/"> Jetty </a> container into a <a href="https://grpc.io/"> GRPC </a>
                                        enabled, non-blocking <a href="https://www.playframework.com/"> Play </a> application
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://www.scala-lang.org/"> Scala</a>,
                                        <a href="https://scalapb.github.io/"> ScalaPB</a>,
                                        <a href="https://www.playframework.com/"> Play</a>,
                                        <a href="https://prometheus.io/"> Prometheus</a>,
                                        <a href="https://lucene.apache.org/solr/"> Solr</a>,
                                        <a href="https://zio.dev/"> ZIO</a>
                                        )
                                    </li>
                                    <li>Designed and implemented multiple highly customized <a href="https://lucene.apache.org/solr/"> Solr </a>
                                        collectors, scorers, filter caches, field comparators, and query parser plugins</li>
                                    <li>Designed and implemented a non-blocking web front end that orchestrates numerous remote calls to back
                                        end microservices
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://scalapb.github.io/"> ScalaPB</a>,
                                        <a href="https://www.playframework.com/"> Play</a>,
                                        <a href="https://prometheus.io/"> Prometheus</a>,
                                        <a href="https://www.jaegertracing.io/"> Jaeger</a>,
                                        <a href="https://zio.dev/"> ZIO</a>
                                        )
                                    </li>
                                    <li>Designed and implemented user friendly fail-slow validation in request handling and configuration parsing
                                        (
                                        <a href="https://eed3si9n.com/learning-scalaz/Validation.html">Scalaz</a>,
                                        <a href="https://github.com/lightbend/config"> HOCON Config</a>
                                        )
                                    </li>
                                    <li>Designed and implemented a custom boolean filter parser and grammar used in request handling, and a polymorphic AST parser builder framework
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://javacc.github.io/javacc/"> JavaCC</a>,
                                        <a href="https://www.scala-lang.org/"> Scala</a>,
                                        <a href="https://com-lihaoyi.github.io/fastparse/"> Fast Parse</a>
                                        )
                                    </li>
                                    <li>Designed and implemented streaming protobuf API and handlers to maximize local cache hit ratio and
                                        minimize end-to-end latency of runtime calls
                                        (
                                        <a href="https://zio.dev/">ZIO</a>,
                                        <a href="https://zio.dev/"> ZStreams</a>,
                                        <a href="https://scalapb.github.io/"> ScalaPB</a>
                                        )
                                    </li>
                                    <li>Designed and implemented a remote shared cache used to decorate search results with requested metadata
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://twitter.github.io/finagle/"> Twitter Finagle</a>,
                                        <a href="https://thrift.apache.org/"> Apache Thrift</a>,
                                        <a href="https://www.couchbase.com/products/server"> Couchbase</a>,
                                        <a href="https://zookeeper.apache.org/"> Zookeeper</a>,
                                        <a href="https://github.com/ben-manes/caffeine"> Caffeine</a>,
                                        <a href="https://grpc.io/"> GRPC</a>/<a href="https://developers.google.com/protocol-buffers">Protocol Buffer</a>
                                        )
                                    </li>
                                    <li>Created a fall back safety net system that serves minimal non-personalized responses when the REX system is under unexpected
                                        severe load
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://kafka.apache.org/"> Apache Kafka</a>,
                                        <a href="https://doc.akka.io/docs/akka/current/stream/stream-introduction.html"> Akka Streams</a>,
                                        <a href="https://doc.akka.io/docs/alpakka-kafka/current/home.html"> Reactive Kafka</a>,
                                        <a href="https://redis.io/"> Redis</a>,
                                        <a href="https://redis.io/topics/sentinel"> Redis Sentinel</a>
                                        )
                                    </li>
                                    <li>Created a custom testing framework for fast/parallel functional testing of stateful platform services across multiple stacks deployed in <a href="https://kubernetes.io/">Kubernetes</a>
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="http://www.scalatest.org/"> ScalaTest</a>,
                                        <a href="https://helm.sh/"> Helm</a>,
                                        <a href="https://zio.dev/"> ZIO</a>,
                                        <a href="https://www.playframework.com/"> Play</a>,
                                        <a href="https://www.couchbase.com/products/server"> Couchbase</a>,
                                        <a href="https://lucene.apache.org/solr/"> Solr</a>
                                        )
                                    </li>
                                    <li>Created numerous <a href="https://kubernetes.io/">Kubernetes</a> <a
                                        href="https://helm.sh/">Helm</a> charts for development, QA, and production purposes
                                    </li>
                                    <li>Ran performance scenarios using production data and request traffic, as well as micro
                                        benchmarking of hot spot in order to improve performance taking mechanical sympathy into
                                        consideration
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://www.playframework.com/"> Play</a>,
                                        <a href="https://zio.dev/"> ZIO</a>,
                                        <a href="https://lucene.apache.org/solr/"> Solr Cloud</a>,
                                        <a href="https://prometheus.io/"> Prometheus</a>,
                                        <a href="https://grafana.com/"> Grafana</a>,
                                        <a href="https://helm.sh/"> Helm</a>,
                                        <a href="https://kubernetes.io/"> Kubernetes</a>,
                                        <a href="https://github.com/openjdk/jmh"> JMH</a>
                                        )
                                    </li>
                                    <li>Created numerous web based support tools and prototypes
                                        (
                                        <a href="https://www.javascript.com/">JavaScript</a>,
                                        <a href="https://reactjs.org/"> React</a>,
                                        <a href="https://redux.js.org/"> Redux</a>,
                                        <a href="https://github.com/dagrejs/dagre"> Dagre</a>
                                        )
                                    </li>
                                    <li>Served as Senior developer on legacy monolith implementation
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://lucene.apache.org/solr/"> Solr</a>,
                                        <a href="https://spring.io/"> Spring</a>,
                                        <a href="https://www.eclipse.org/jetty/"> Jetty</a>,
                                        <a href="https://labs.carrotsearch.com/hppc.html"> HPPC</a>,
                                        <a href="https://trove4j.sourceforge.net/html/overview.html"> Trove</a>,
                                        <a href="https://junit.org/"> JUnit</a>,
                                        <a href="https://www.jenkins.io/"> Jenkins</a>,
                                        <a href="https://docs.sonarqube.org/"> SonarQube</a>
                                        )
                                    </li>
                                </ul>
                            </summary>
                        </project>
                    </client>

                    <client>
                        <name><a href="https://www.gao.gov/">United States Government Accountability Office (GAO)</a></name>
                        <position>Technical Lead for the GAO Engagement Management System project</position>
                        <project>
                            <name>GAO Engagement Management System (GEMS)</name>
                            <summary>
                                An enterprise integration project focused on replacing legacy systems that are involved in the managing
                                the primary business function of the GAO.
                                <ul>
                                    <li>Lead a team of 5 developers</li>
                                    <li>Created a Java based library for interfacing the <a href="http://x3270.bgp.nu/">s3270 IBM 3270 terminal emulator</a> in order to access legacy
                                        applications on the National Finance Center mainframe
                                        (
                                        <a href="http://x3270.bgp.nu/">s3270</a>,
                                        <a href="https://groovy-lang.org/"> Groovy</a>
                                        )
                                    </li>
                                    <li>Used <a href="https://groovy-lang.org/"> Groovy</a> for code generation of screen scrapers</li>
                                    <li>Designed and implemented REST services serving semantic JSON messages
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://eclipse-ee4j.github.io/jersey/"> Jersey JAX-RS</a>,
                                        <a href="https://github.com/FasterXML/jackson"> Jackson</a>,
                                        <a href="https://hibernate.org/"> Hibernate</a>,
                                        <a href="https://itextpdf.com/en/products/itext-7/itext-7-core"> iTextPDF</a>,
                                        <a href="https://www.oracle.com/database/"> Oracle Database</a>,
                                        <a href="https://dojotoolkit.org/"> Dojo</a>,
                                        <a href="https://www.sencha.com/products/extjs"> Sensha Ext JS</a>
                                        )
                                    </li>
                                </ul>
                            </summary>
                        </project>
                    </client>

                    <client>
                        <name><a href="https://www.justice.gov/ust">United States Department of Justice - United States Trustees Program (USTP)</a></name>
                        <position>Java Architect (Subject Matter Expert) / Team Lead for Common Code</position>
                        <summary>
                            <ul>
                                <li>Served as chief software architect for the prime’s multi-vendor software development team of 16
                                    developers at USTP on multiple concurrent bankruptcy related projects
                                </li>
                                <li>Advised and steered the government CIO office on long-term technical strategies</li>
                                <li>Planned and executed numerous software development and production release efforts</li>
                            </ul>
                        </summary>
                        <project>
                            <name>Professional Timekeeping System (PTS)</name>
                            <summary>A web application for collecting non-payroll timesheet metrics related to the Chapter 7, Chapter
                                11, and Chapter 13 activities performed by attorneys, paralegals, clerk staff, and bankruptcy analysts
                                throughout the United States Trustee Program.
                                <ul>
                                    <li>Designed and implemented most of the application including functionality that handles user
                                        navigation, page rendering, and database access
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://wildfly.org/"> JBoss AS</a>,
                                        <a href="https://www.microsoft.com/en-us/sql-server/default.aspx"> Microsoft SQL Server</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts</a>,
                                        <a href="https://spring.io/"> Spring</a>,
                                        <a href="https://castor-data-binding.github.io/castor/main/index.html"> Castor</a>,
                                        <a href="https://www.eclipse.org/aspectj/"> AspectJ</a>,
                                        <a href="https://jquery.com/"> jQuery</a>, and
                                        <a href="https://hibernate.org/"> Hibernate</a>
                                        ).
                                    </li>
                                </ul>
                            </summary>
                        </project>
                        <project>
                            <name><a href="https://www.justice.gov/ust/foia-privacy-act/fee-information-and-collection-system-fics">Fee Information Collection System (FICS)</a></name>
                            <summary>
                                A complete redesign of the accounts receivable system that manages the billing and fees collected from
                                all Chapter 11 bankruptcy court cases in the United States. FICS manages roughly $1 million in fee
                                transactions every business day and provides the primary funding for the entire United States Trustee
                                Program.
                                <ul>
                                    <li>Designed and implemented most of the web application functionality that handles user navigation,
                                        database access, and searching
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://wildfly.org/"> JBoss AS</a>,
                                        <a href="https://www.ibm.com/products/db2-database"> DB2/AS400</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts</a>,
                                        <a href="https://spring.io/"> Spring</a>,
                                        <a href="https://castor-data-binding.github.io/castor/main/index.html"> Castor</a>, and
                                        <a href="https://hibernate.org/"> Hibernate</a>
                                        ).
                                    </li>
                                    <li>Designed and implemented complex business logic that determined what fee is assessed for each
                                        debtor on a quarterly basis.
                                    </li>
                                </ul>
                            </summary>
                        </project>
                        <project>
                            <name><a href="https://www.justice.gov/ust/means-testing">Means Test Review (MTR)</a></name>
                            <summary>
                                A new software solution for determining the presumption of abuse when analyzing a debtor’s means test as
                                required by the <a href="https://www.congress.gov/bill/109th-congress/senate-bill/256/text">Bankruptcy Abuse Protection and Consumer Protection Act of
                                2005</a>.
                                <ul>
                                    <li>Designed and implemented major portions of the web application and background processes that
                                        interface with external and legacy systems
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://wildfly.org/"> JBoss AS</a>,
                                        <a href="https://www.ibm.com/products/db2-database"> DB2/AS400</a>,
                                        <a href="https://www.microsoft.com/en-us/sql-server/default.aspx"> Microsoft SQL Server</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts</a>,
                                        <a href="https://activemq.apache.org/"> Apache ActiveMQ</a>,
                                        <a href="https://spring.io/"> Spring</a>,
                                        <a href="https://castor-data-binding.github.io/castor/main/index.html"> Castor</a>, and
                                        <a href="https://hibernate.org/"> Hibernate</a>
                                        )
                                    </li>
                                    <li>Prototyped fully functional search capability using <a href="https://lucene.apache.org/">Lucene</a>/<a href="https://hibernate.org/search/">Hibernate Search</a>.</li>
                                </ul>
                            </summary>
                        </project>
                        <project>
                            <name><a href="https://www.justice.gov/ust/credit-counseling-debtor-education-information">Credit Counseling/Debtor Education (CCDE)</a> <a href="https://ccdecert.ustp.usdoj.gov/ccdecert/">Certificate Generation System (CGS)</a></name>
                            <summary>A software solution for managing the credit counseling and debtor education agency debtor
                                certification process as required by the <a href="https://www.congress.gov/bill/109th-congress/senate-bill/256/text">Bankruptcy Abuse Protection and Consumer Protection Act of
                                    2005</a>.
                                <ul>
                                    <li>Designed and implemented major portions of the internal web application used to manage all
                                        companies providing credit counseling and debtor education services
                                        (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://wildfly.org/"> JBoss AS</a>,
                                        <a href="https://www.ibm.com/products/db2-database"> DB2/UDB</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts</a>,
                                        <a href="https://spring.io/"> Spring</a>, and
                                        <a href="https://hibernate.org/"> Hibernate</a>
                                        )
                                    </li>
                                    <li>Completely overhauled the external facing web application responsible for generating certificates
                                        signifying the completion of various courses required by the bankruptcy filing process (
                                        <a href="https://dev.java/">Java</a>,
                                        <a href="https://wildfly.org/"> JBoss AS</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts</a>,
                                        <a href="https://spring.io/"> Spring</a>,
                                        <a href="https://www.oracle.com/database/"> Oracle Database</a>, and
                                        <a href="https://hibernate.org/"> Hibernate</a>
                                        )
                                    </li>
                                    <li>Implemented dynamic PDF certificate generation including embedded bar codes
                                        (
                                        <a href="https://pdfbox.apache.org/">PDFBox</a>,
                                        <a href="https://itextpdf.com/en/products/itext-7/itext-7-core"> iTextPDF</a>
                                        )
                                    </li>
                                </ul>
                            </summary>
                        </project>
                    </client>

                    <client>
                        <name><a href="https://www.intrado.com/">Intrado</a></name>
                        <position>Senior Software Consultant</position>
                        <project>
                            <name>9-1-1 Information Manager</name>
                            <summary>9-1-1 call center J2EE application that managed street address change request workflow and
                                resulting telephone number/driving direction discrepancies at the municipality level. This application
                                was the first of many that combined functionality from legacy SCC and Lucent Public Safety Systems Group
                                systems - managing more emergency response data records than any other system in the world. Initial
                                customers included Verizon, Pacific Bell, and Southwest Bell.
                                <ul>
                                    <li>Implemented a flexible web application framework using <a href="https://xerces.apache.org/">XML</a>/<a href="https://xalan.apache.org/">XSL</a>/<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> page rendering
                                        techniques in a web portal architecture (
                                        <a href="https://cocoon.apache.org/">Apache Cocoon</a>,
                                        <a href="https://castor-data-binding.github.io/castor/main/index.html"> Castor</a>, and
                                        <a href="https://www.oracle.com/middleware/technologies/weblogic.html"> Web Logic Server</a>
                                        ).
                                    </li>
                                    <li>Designed and implemented numerous  <a href="https://cocoon.apache.org/">Cocoon</a>/<a href="https://castor-data-binding.github.io/castor/main/index.html">Castor</a> enabled <a href="https://docs.oracle.com/cd/E16439_01/doc.1013/e13981/undejbs002.htm">session EJBs</a> and <a href="https://docs.oracle.com/cd/B14099_19/web.1012/b15505/bmp.htm>">BMP entity EJBs</a> accessing
                                        several legacy <a href="https://www.ibm.com/products/informix">Informix</a> databases.
                                    </li>
                                    <li>Designed a versatile XML report framework for generating reports in HTML, PDF, SVG and Excel
                                        formats.
                                    </li>
                                    <li>Designed and implemented a multi-threaded <a href="https://en.wikipedia.org/wiki/Java_remote_method_invocation">RMI</a> server for scheduling report generation during
                                        off-peak hours using a customized version of open-source <a href="http://www.quartz-scheduler.org/">Quartz</a> scheduling libraries.
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
                                business with minimal human interaction. Specific functionality included: electronic billing presentment
                                and payment, product catalog, order entry, trouble ticketing and consolidated billing.
                                <ul>
                                    <li>Designed the graphic user interface for a desktop administration application used to configure and
                                        manage all aspects of the J1 platform. Implemented “admintool” as a <a href="https://en.wikipedia.org/wiki/Swing_(Java)">Swing</a> based <a href="https://en.wikipedia.org/wiki/Enterprise_JavaBeans">EJB</a> client.
                                    </li>
                                    <li>Implemented admintool modules to manage configuration and deployment settings, inline
                                        advertisement graphics, and J1's highly customizable XML based permissions and preferences framework.
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
                        <url><a href="https://www.lockheedmartin.com/en-us/index.html">http://www.lockheedmartin.com</a></url>
                    </company>
                    <client>
                        <summary>
                            <ul>
                                <li>Researched emerging Internet technologies under the direction of <a href="https://www.linkedin.com/in/keith-werkman-b7955119">Dr. Keith Werkman.</a></li>
                                <li>Researched emerging distributed computing technologies under the direction of <a href="http://tracz.org/will/tracz-full-bio.html">Dr. Will Tracz.</a></li>
                                <li>Created a reuse metrics calculator under the direction of <a href="http://jeffreypoulin.info/">Dr. Jeffrey Poulin</a> for his book <a href="https://www.amazon.com/Measuring-Software-Reuse-Principles-Practices/dp/0201634139">Measuring Software Reuse: Principles, Practices, and Economic Models.</a>
                                </li>
                            </ul>
                        </summary>
                        <project>
                            <name>Battlefield Ministry Tracking and Information System</name>
                            <summary>
                                Prototype hardware/software solution for use by US Army chaplains on the battlefield to deliver pastoral
                                care information back to the sustaining base using a wide range of commercial wireless handheld devices
                                (
                                <a href="https://en.wikipedia.org/wiki/Windows_API#Versions">Win32</a>,
                                <a href="https://en.wikipedia.org/wiki/Windows_Embedded_Compact"> WinCE</a>,
                                <a href="https://en.wikipedia.org/wiki/Palm_OS"> PalmOS</a>, and
                                <a href="https://en.wikipedia.org/wiki/DOS"> DOS</a>). The success of this project opened the door for Lockheed Martin to win four
                                new US Army research contracts.
                                <p/>
                                <a href="https://ieeexplore.ieee.org/document/821408">J. Impson, S. Kupst, N. Mehravari, S. Rush and S. Woods, "Portable wireless battlefield ministration tracking and information system," MILCOM 1999. IEEE Military Communications. Conference Proceedings (Cat. No.99CH36341), Atlantic City, NJ, USA, 1999, pp. 1272-1276 vol.2.</a>
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

                <div className={style.resumeCard}>
                    <div className={style.resumeHeader1}>
                        Education
                    </div>
                    <company>
                        <name>Pennsylvania State University</name>
                        <dates>1997</dates>
                        <location>University Park, PA</location>
                    </company>
                    <company>
                        <position>Bachelor of Science in Computer Science</position>
                    </company>
                    <p/>
                    <company>
                        <name>Rochester Institute of Technology</name>
                        <dates>1997</dates>
                        <location>Rochester, NY</location>
                    </company>
                    <company>
                        <position>Associate of Applied Science in Computer Science </position>
                    </company>
                    <client>


                    </client>
                </div>

                <div className={style.resumeCard}>
                    <div className={style.resumeHeader1}>
                        Certifications
                    </div>
                    <company>
                        <name>Scrum Alliance - LitheSpeed</name>
                        <dates>2011</dates>
                        <location>Reston, VA</location>
                    </company>
                    <company>
                        <position>Scrum Master Certification</position>
                    </company>
                    <p/>
                    <company>
                        <name>École Polytechnique Fédérale de Lausanne</name>
                        <dates>2019</dates>
                        <location>Coursera</location>
                    </company>
                    <company>
                        <ul className={style.unbulleted}>
                            <li>Functional Programming Principles in Scala </li>
                            <li>Functional Program Design in Scala </li>
                            <li>Parallel Programming in Scala </li>
                        </ul>

                    </company>
                    <client>


                    </client>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ResumePage;

export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
`
