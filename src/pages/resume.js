import React from "react"
import Layout from "../components/layout"
import * as style from "../pages/resume.module.css"
import { graphql } from "gatsby"

const ResumePage = (props) => {

    const { data } = props
    const siteTitle = data.site.siteMetadata.title

    const now = new Date()
    const professionalYears = now.getFullYear() - 1996

    return (
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
                        Highly skilled lead software engineer/architect with {professionalYears} years of progressive experience designing and
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
                        <url><a href="http://www.altarasystems.com">http://www.altarasystems.com</a></url>
                    </company>

                    <client>
                        <name><a href="https://corporate.comcast.com/company/xfinity">Comcast AI and Discovery Labs</a></name>
                        <position>Contractor - Technical Lead for Runtime Systems Search/Browse</position>
                        <summary>
                            <ul>
                                <li>Lead the multi-year design and implementation effort for Comcast’s content discovery platform
                                    providing the ability to discover movies, series, episodes, bundles, teams, sports, leagues, bands,
                                    companies, stations, menus, and people across both video on demand and linear TV mediums filtered by
                                    continuously changing time window and individual customer entitlements.
                                </li>
                                <li>
                                    Championed conversion effort from <a href="https://subversion.apache.org/">Subversion</a> to <a
                                    href="https://git-scm.com/">Git</a> for entire DC office of 100 developers,
                                    researchers, and operations staff (
                                    <a href="https://www.atlassian.com/software/bitbucket"> Atlassian Stash</a>,
                                    <a href="https://about.gitlab.com"> GitLab</a>,
                                    <a href="https://github.com/enterprise"> GitHub Enterprise.</a>).
                                </li>
                                <li>Established continuous integration and artifact releases (
                                    <a href="https://maven.apache.org">Maven</a>,
                                    <a href="https://www.scala-sbt.org/"> SBT</a>,
                                    <a href="https://jfrog.com/artifactory/"> Artifactory</a>,
                                    <a href="https://www.atlassian.com/software/bamboo"> Atlassian Bamboo</a>,
                                    <a href="https://jenkins.io/"> Jenkins</a>,
                                    <a href="https://www.sonarqube.org/"> SonarQube</a>).
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
                                    functional testing of stateful platform services across multiple stacks deployed in <a href="https://kubernetes.io/">Kubernetes</a>
                                    (
                                    <a href="https://www.scala-lang.org/">Scala</a>,
                                    <a href="http://www.scalatest.org/"> ScalaTest</a>,
                                    <a href="https://helm.sh/"> Helm</a>,
                                    <a href="https://zio.dev/"> ZIO</a>,
                                    <a href="https://www.playframework.com/"> Play</a>,
                                    <a href="https://www.couchbase.com/products/server"> Couchbase</a>,
                                    <a href="https://lucene.apache.org/solr/"> Solr</a>)
                                </li>
                            </ul>
                        </summary>
                        <project>
                            <name>Relevance Engine for Xfinity (REX Query Engine)</name>
                            <summary>
                                A highly customized <a href="https://lucene.apache.org/solr/">Apache Solr</a> based search engine that
                                represents the backbone of Comcast’s <a
                                href="https://www.xfinity.com/support/articles/xfinity-tv-on-the-x1-platform">Xfinity X1</a>
                                content discovery platform. It is responsible for providing personalized search, browse, and
                                recommendation content on set top boxes, web clients, and handheld devices used by 30 million Xfinity
                                customers and the customers of partner licensees (Cox, Rogers, Sky, Videotron). 500 - 800 production
                                instances deployed
                                across 5 on-premise data centers and 3 Amazon AWS cloud regions depending on time of day.
                                <ul>
                                    <li>Designed and integrated customized scoring, sorting, and collection capabilities into <a
                                        href="https://lucene.apache.org/solr/">Solr</a> to provide flexible relevance options using
                                        Comcast proprietary relevance algorithms.
                                    </li>
                                    <li>Designed and implemented non-English preferred language support based on what programs are
                                        currently available and what an individual customer is entitled to see.
                                    </li>
                                    <li>Designed and implemented <a href="https://lucene.apache.org/solr/">Apache Solr</a>/<a
                                        href="https://spring.io/">Spring</a> integration that allows <a
                                        href="https://lucene.apache.org/solr/">Solr</a> components to be managed
                                        by <a href="https://spring.io/">Spring</a> and avoid class loader issues.
                                    </li>
                                    <li>Created numerous request handlers and JSON response writers.</li>
                                    <li>Created filter query parsers responsible for generating entity and showing core filter cache bit
                                        sets for editorial collections, time windows, entitlements, and program availabilities
                                    </li>
                                    <li>Created a customized filter query parser responsible for performing a high performance “join”
                                        across entity, showing, station, channel, and media availability <a
                                            href="https://lucene.apache.org/solr/">Solr</a> cores required by all REX
                                        queries.
                                    </li>
                                    <li>Created optimized data structures derived from <a
                                        href="https://lucene.apache.org/">Lucene</a> indexes used at runtime to drastically
                                        improve native <a href="https://lucene.apache.org/solr/">Solr</a> performance.
                                    </li>
                                    <li>Created system that continuously downloads ranking data from an external web service to decouple
                                        scoring data from <a href="https://lucene.apache.org/solr/">Solr</a> core indexes.
                                    </li>
                                </ul>
                            </summary>
                        </project>
                        <project>
                            <name>XNavi</name>
                            <summary>
                                A high-performance data broker that allows Comcast legacy set top boxes to leverage the search, browse,
                                and editorial features of the <a
                                href="https://www.xfinity.com/support/articles/xfinity-tv-on-the-x1-platform">Xfinity X1</a>
                                platform, by managing the coordination of various back end systems in a completely non-blocking way.
                                <ul>
                                    <li>Designed and implemented XML-based request handlers and response writers, as well as several <a
                                        href="https://zio.dev/">ZIO</a> effect services.
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://www.playframework.com/"> Play</a>,
                                        <a href="https://zio.dev/"> ZIO</a>,
                                        <a href="https://www.couchbase.com/products/server"> Couchbase</a>,
                                        <a href="https://www.oracle.com/technical-resources/articles/javase/jaxb.html"> JAXB</a>,
                                        <a href="https://developers.google.com/protocol-buffers"> Protocol Buffers</a>,
                                        <a href="http://reactivex.io/rxscala/"> RxScala</a>,
                                        <a href="https://github.com/ben-manes/caffeine"> Caffeine</a>
                                        )
                                    </li>
                                    <li>Created a <a href="https://goreplay.org/">GoReplay</a> middleware to forward production legacy
                                        traffic to development and QA testing instances using test data and filtering out purchase, rent,
                                        and session history transactions
                                        (
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>,
                                        <a href="https://goreplay.org/">GoReplay</a>
                                        )
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
                                        traffic.
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://www.playframework.com/"> Play</a>,
                                        <a href="https://zio.dev/"> ZIO</a>,
                                        <a href="https://lucene.apache.org/solr/"> Solr Cloud</a>,
                                        <a href="https://prometheus.io/"> Prometheus</a>,
                                        <a href="https://grafana.com/"> Grafana</a>,
                                        <a href="https://helm.sh/"> Helm</a>,
                                        <a href="https://kubernetes.io/"> Kubernetes</a>
                                        )
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
                                    <li>Designed and created initial implementation that fetched JSON data from <a
                                        href="https://www.couchbase.com/products/server">Couchbase</a>, converted it to
                                        <a href="https://thrift.apache.org/">Thrift</a> binary format, and stored resulting payload in a
                                        local <a href="https://github.com/ben-manes/caffeine">Caffeine</a> cache before returning to
                                        client.
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://twitter.github.io/finagle/"> Twitter Finagle</a>,
                                        <a href="https://thrift.apache.org/"> Apache Thrift</a>,
                                        <a href="https://www.couchbase.com/products/server"> Couchbase</a>,
                                        <a href="https://zookeeper.apache.org/"> Zookeeper</a>,
                                        <a href="https://github.com/ben-manes/caffeine"> Caffeine</a>
                                        )
                                    </li>
                                    <li>Updated RMD to provide a <a href="https://grpc.io/">GRPC</a>/<a
                                        href="https://developers.google.com/protocol-buffers">Protocol Buffer</a> interface for use
                                        within <a href="https://kubernetes.io/">Kubernetes</a> clusters
                                    </li>
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
                                        incoming production REX requests from an <a href="https://kafka.apache.org/">Apache Kafka</a> topic, replays a modified version of the
                                        request, and stores the resulting REX response in a Redis database. The cached responses are then
                                        fetched by a MinREX front end client when the REX system is under severe load.
                                        (
                                        <a href="https://www.scala-lang.org/">Scala</a>,
                                        <a href="https://doc.akka.io/docs/akka/current/stream/stream-introduction.html"> kka Streams</a>,
                                        <a href="https://doc.akka.io/docs/alpakka-kafka/current/home.html"> Reactive Kafka</a>,
                                        <a href="https://redis.io/"> Redis</a>,
                                        <a href="https://redis.io/topics/sentinel"> Redis Sentinel</a>
                                        )
                                    </li>
                                </ul>
                            </summary>
                        </project>
                    </client>

                    <client>
                        <name><a href="https://www.gao.gov/">United States Government Accountability Office (GAO)</a></name>
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
                                    <li>Created a Java based library for interfacing the <a href="http://x3270.bgp.nu/">s3270 IBM 3270 terminal emulator</a> in order to access legacy
                                        applications on the National Finance Center mainframe
                                        (
                                        <a href="http://x3270.bgp.nu/">s3270</a>,
                                        <a href="https://groovy-lang.org/"> Groovy</a> ).
                                    </li>
                                    <li>Used Groovy for code generation of screen scrapers</li>
                                    <li>Designed and implemented REST services serving semantic JSON messages
                                        (
                                        <a href="https://eclipse-ee4j.github.io/jersey/">Jersey JAX-RS</a>,
                                        <a href="https://github.com/FasterXML/jackson"> Jackson</a>,
                                        <a href="https://hibernate.org/"> Hibernate</a>,
                                        <a href="https://itextpdf.com/en/products/itext-7/itext-7-core"> iTextPDF</a>,
                                        <a href="https://www.oracle.com/database/"> Oracle Database</a>,
                                        <a href="https://dojotoolkit.org/"> Dojo</a>,
                                        <a href="https://www.sencha.com/products/extjs"> Sensha Ext JS</a>
                                        ).
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
                                    developers at USTP on eight concurrent bankruptcy related projects.
                                </li>
                                <li>Advised and steered the government CIO office on long-term technical strategies.</li>
                                <li>Planned and executed numerous software development and production release efforts.</li>
                                <li>Wrote all of the <a href="https://ant.apache.org/">Ant</a> build scripts used to build and deploy each application.</li>
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
                                        <a href="https://wildfly.org/">JBoss AS</a>,
                                        <a href="https://www.microsoft.com/en-us/sql-server/default.aspx"> Microsoft SQL Server</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts </a>,
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
                                        <a href="https://wildfly.org/">JBoss AS</a>,
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
                                        <a href="https://wildfly.org/">JBoss AS</a>,
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
                                    <li>Designed and implemented major portions of the internal web application used to manage all of the
                                        companies providing credit counseling and debtor education services
                                        (
                                        <a href="https://wildfly.org/">JBoss AS</a>,
                                        <a href="https://www.ibm.com/products/db2-database"> DB2/UDB</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts</a>,
                                        <a href="https://spring.io/"> Spring</a>, and
                                        <a href="https://hibernate.org/"> Hibernate</a>
                                        )
                                    </li>
                                    <li>Completely overhauled the external facing web application responsible for generating certificates
                                        signifying the completion of various courses required by the bankruptcy filing process (
                                        <a href="https://wildfly.org/">JBoss AS</a>,
                                        <a href="https://en.wikipedia.org/wiki/JavaServer_Pages_Standard_Tag_Library"> JSP JSTL</a>,
                                        <a href="https://struts.apache.org/"> Apache Struts</a>,
                                        <a href="https://spring.io/"> Spring</a>,
                                        <a href="https://www.oracle.com/database/"> Oracle Database</a>, and
                                        <a href="https://hibernate.org/"> Hibernate</a>
                                        )
                                    </li>
                                    <li>Implemented dynamic PDF certificate generation including embedded bar codes using <a href="https://pdfbox.apache.org/">PDFBox</a> and
                                        <a href="https://itextpdf.com/en/products/itext-7/itext-7-core"> iTextPDF</a>.
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
            </div>
        </div>
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
