import Image from "next/image";
import Link from "next/link";
import { latestArticles, topArticles } from "../data/mockData";
import Nav from "@/components/Nav";
import prefix from "@/utils/prefix";

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto text-base">
      <Nav />
      <main className="mx-4">
        <h1 className="border-0 overflow-hidden h-[1px] -m-[1px] p-0 absolute" style={{ WebkitClip: "rect(0, 0, 0, 0)", clip: "rect(0, 0, 0, 0)" }}>Newspage top stories</h1>
        <div className="">
          <div className="flex flex-col gap-20 lg:flex-row lg:gap-8">
            <FeaturedArticle />
            <LatestArticles latestArticles={latestArticles} />
          </div>
          <TopArticles topArticles={topArticles} />
        </div>
      </main>
    </div>
  );
}

const FeaturedArticle = () => {
  return (
    <section className="lg:flex-[2]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <picture className="w-full h-full">
            <source srcSet={`${prefix}/static/images/image-web-3-desktop.jpg`} media="(min-width:1024px)" />
            <img className="w-full" src={`${prefix}/static/images/image-web-3-mobile.jpg`} alt="A pattern of colorful three-dimensional shapes" />
          </picture>
          <div className="flex flex-col gap-6 lg:flex-row">
            <h2 className="text-4xl font-extrabold sm:text-5xl lg:flex-1">The Bright Future of Web 3.0?</h2>
            <div className="lg:flex-1">
              <p className="mb-6 leading-relaxed text-secondary">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Link className="inline-flex items-center content-center px-10 cursor-pointer group/link bg-fill h-14 hover:bg-fill-hover" href="#">
                <span className="group-hover/link:text-default-inverse uppercase font-extrabold tracking-[4px] leading-none">Read more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LatestArticles = ({ latestArticles }) => {
  return (
    <section className="bg-inverse text-default-inverse lg:flex-[1]">
      <div className="p-6 pb-0">
        <h2 className="text-4xl font-bold text-brand-variant">New</h2>
        <ul className=" divide-y *:py-8">
          {
            latestArticles.map(article => (
              <li key={article.title}>
                <Link className="group/link" href={article.href}>
                  <h3 className="mb-2 text-xl font-extrabold group-hover/link:text-link-inverse-hover text-link-inverse">{article.title}</h3>
                  <p className="leading-relaxed text-secondary-inverse">{article.subtitle}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

const TopArticles = ({ topArticles }) => {
  return (
    <section>
      <div className="my-20">
        <ol className="flex flex-col gap-8 lg:flex-row">
          {
            topArticles.map((article, index) => (
              <li key={article.title}>
                <div className="flex gap-6">
                  <div>
                    <Image
                      width={200}
                      height={254}
                      src={article.imageSrc}
                      alt={article.imageAlt}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-brand">0{index + 1}</span>
                    <Link href={article.href}>
                      <h2 className="text-xl font-extrabold text-link hover:text-link-hover">Reviving Retro PCs</h2>
                    </Link>
                    <p className="leading-relaxed text-secondary">What happens when old PCs are given modern upgrades?</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    </section>
  );
};