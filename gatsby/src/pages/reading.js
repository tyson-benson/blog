import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Reading = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="What's on my bookshelf" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="blog-header-wrapper">
            <h1>My Bookshelf</h1>
          </div>
        </header>
        <div className="page-wrapper">
          <p>
            This is a list of books I'm reading, or have started reading. At
            some stage I'll post a review of each of them, in part as a way to
            help me distill my thoughts, reinforce my learnings, and
            acknowledge/thank the authors for the efforts they've spent in
            writing these books to share their knowledge.
          </p>
          <h2>
            Read, <span className="heading-accent">and in my head</span>
          </h2>
          <ol className="book-list">
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-phoenix-project.jpg"
                  alt="The Phoenix Project Front Cover"
                />
                <figcaption>The Phoenix Project</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-unicorn-project.jpg"
                  alt="The Unicorn Project Front Cover"
                />
                <figcaption>The Unicorn Project</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-devops-handbook.jpg"
                  alt="The DevOps Handbook Front Cover"
                />
                <figcaption>The DevOps Handbook</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/fundamentals-of-software-architecture.jpg"
                  alt="Fundamentals of Software Architecture Front Cover"
                />
                <figcaption>Fundamentals of Software Architecture</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/monolith-to-microservices.jpg"
                  alt="Monolith to Microservices Front Cover"
                />
                <figcaption>Monolith to Microservices</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/a-seat-at-the-table.jpg"
                  alt="A Seat at the Table Front Cover"
                />
                <figcaption>A Seat at the Table</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-goal.jpg"
                  alt="The Goal Front Cover"
                />
                <figcaption>The Goal</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/thinking-fast-and-slow.jpg"
                  alt="The Goal Front Cover"
                />
                <figcaption>Thinking, Fast and Slow</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/sapiens.jpg"
                  alt="Sapiens Front Cover"
                />
                <figcaption>Sapiens</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/21-lessons-for-the-21st-century.jpg"
                  alt="21 Lessons for the 21st Century Front Cover"
                />
                <figcaption>21 Lessons for the 21st Century</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/factfulness.jpg"
                  alt="Factfulness Front Cover"
                />
                <figcaption>Factfulness</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/how-to-win-friends-and-influence-people.jpg"
                  alt="21 Lessons for the 21st Century Front Cover"
                />
                <figcaption>How to win friends and influence people</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/how-to-stop-worrying-and-start-living.jpg"
                  alt="21 Lessons for the 21st Century Front Cover"
                />
                <figcaption>How to stop worrying and start living</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-barefoot-investor.jpg"
                  alt="The Barefoot Investor Front Cover"
                />
                <figcaption>The Barefoot Investor</figcaption>
              </figure>
            </li>
          </ol>
          <h2>On my shelf</h2>
          <ul className="book-list">
            <li>
              <figure>
                <StaticImage
                  src="../images/books/team-topologies.jpg"
                  alt="Team Topologies Front Cover"
                />
                <figcaption>Team Topologies</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-delicate-art-of-bureaucracy.jpg"
                  alt="The (Delicate) Art of Bureaucracy Front Cover"
                />
                <figcaption>The (Delicate) Art of Bureaucracy</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/building-microservices.jpg"
                  alt="Building Microservices Front Cover"
                />
                <figcaption>Building Microservices - 2nd Edition</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/designing-distributed-systems.jpg"
                  alt="Designing Distributed Systems Front Cover"
                />
                <figcaption>Designing Distributed Systems</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/continuous-delivery-pipelines.jpg"
                  alt="Continuous Delivery Pipelines Front Cover"
                />
                <figcaption>Continuous Delivery Pipelines</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/continuous-delivery.jpg"
                  alt="Continuous Delivery Front Cover"
                />
                <figcaption>Continuous Delivery</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/cloud-native-transformation.jpg"
                  alt="Cloud Native Transformation Front Cover"
                />
                <figcaption>Cloud Native Transformation</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/building-event-driven-microservices.jpg"
                  alt="Building Event Driven Microservices Front Cover"
                />
                <figcaption>Building Event Driven Microservices</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/building-evolutionary-architectures.jpg"
                  alt="Building Evolutionary Architectures Front Cover"
                />
                <figcaption>Building Evolutionary Architectures</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/data-management-at-scale.jpg"
                  alt="Data Management at Scale Front Cover"
                />
                <figcaption>Data Management at Scale</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/designing-data-intensive-applications.jpg"
                  alt="Designing Data Intensive Applications Front Cover"
                />
                <figcaption>Designing Data Intensive Applications</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/clean-architecture.jpg"
                  alt="Clean Architecture Front Cover"
                />
                <figcaption>Clean Architecture Architectures</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/ddd.jpg"
                  alt="Domain Driven Design Front Cover"
                />
                <figcaption>Domain Driven Design</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/clean-code.jpg"
                  alt="Clean Code Front Cover"
                />
                <figcaption>Clean Code Architectures</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-mythical-man-month.jpg"
                  alt="The Mythical Man Month Front Cover"
                />
                <figcaption>The Mythical Man Month</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/edge.jpg"
                  alt="EDGE Front Cover"
                />
                <figcaption>EDGE</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/technology-strategy-patterns.jpg"
                  alt="Technology Strategy Patterns Front Cover"
                />
                <figcaption>Technology Strategy Patterns</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/patterns-of-enterprise-application-architecture.jpg"
                  alt="Patterns of Enterprise Application Architecture Front Cover"
                />
                <figcaption>
                  Patterns of Enterprise Application Architecture
                </figcaption>
              </figure>
            </li>
          </ul>
          <h2>Waiting for release</h2>
          <ul className="book-list">
            <li>
              <figure>
                <StaticImage
                  src="../images/books/software-architecture-the-hard-parts.jpg"
                  alt="Software Architecture - The Hard Parts Front Cover"
                />
                <figcaption>Software Architecture - The Hard Parts</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <StaticImage
                  src="../images/books/the-devops-handbook-2nd.jpg"
                  alt="The DevOps Handbook 2nd Edition Front Cover"
                />
                <figcaption>The DevOps Handbook - 2nd Edition</figcaption>
              </figure>
            </li>
          </ul>
          <h2>My thoughts on reading</h2>
          <p>
            My schooling didn't succeed in sparking my interest in book reading,
            as the best literature they could muster didnt hold a candle to the
            literary classics I discovered after my days in formal education. On
            a whim I decided that I'd missed out on something intangible by not
            having read any of the revered classics, so I found a handful of
            novels that I thought fit that description.
          </p>
          <p>
            I cherry picked some titles from the typical top 100 novels of all
            time lists, and thoroughly enjoyed titles like The Count of Monte
            Christo, The Three Musketeers, A Tale of Two Cities, Great
            Expectations, Around the World in 80 Days, The Great Gatsby, To Kill
            A Mockingbird, One Flew Over the Cuckoo's Nest, The Grapes of Wrath,
            The Good Earth, Foundation, 1984, Brave New World, Farenhheit 451,
            Animal Farm, Invisible Man, Slaughterhouse-Five, Don Quixote,
            Frankenstien, Dracula, Gullivers Travels, The Trial, The Brothers
            Karamazov, American Pastoral, The Big Sleep, For Whom The Bell
            Tolls, Of Mice and Men, The Adventures of Huckleberry Finn, Tom
            Sawyer...
          </p>
          <p>
            Having only dipped into the classic pond, I turned my gaze to modern
            fictions and non-fiction for a taste of what modern authors are
            doing. I was captured by titles like The Omnivores Dilemma, and
            Michael Pollan's other works, Snow Crash, Ice Station, The
            Cryptonomicon, Neuromancer, Dune, Do Androids Dream of Electric
            Sheep, A Scanner Darkly, Fight Club.
          </p>
          <p>
            Before too long I recieved a recommendation from a former manager of
            mine to read The Phoenix Project. This opened up my perspective
            again that not all pleasure in reading is confined to fiction. Now
            certainly, authors of professional/industrial books aren't seeking
            to entertain, but having worked in software development for so many
            years I couldn't help but be entertained and a little frightened by
            the unncanny depiction of my career (and those around me) laid out
            in detail within The Phoenix Project. I attribute some of the
            successes of my career development in the application of ideas from
            the books I've read below.
          </p>
          <p>
            I also fully believe that being well read in the body of knowledge
            that has amassed from other professionals in your field is a key to
            accelerating your career growth. After all, anyone can stand tall
            whilst they're atop the shoulders of giants.
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default Reading

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
