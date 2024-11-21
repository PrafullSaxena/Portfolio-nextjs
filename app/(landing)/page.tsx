
import Hero from "@/scenes/hero";
import '../globals.css';
import Terminal from "@components/Terminal";
import {FloatingNav} from "@components/ui/floating-navbar";
import {navItems} from "@data/AppConstent";
import {MaxWidthWrapper} from "@components/MaxWidthWrapper";
import Nav from "@components/ui/Nav";
import ProjectViewer from "@components/ProjectViewer";
import Footer from "@components/Footer";
import {ContactForm} from "@components/ui/ContactForm";




export default function Home() {
    const formspreetoken = process.env.FORMSPREE_TOKEN || "";
  return (<>
          {/*<div*/}
          {/*    className={` relative flex items-center justify-center flex-col overflow-hidden antialiased sm:px-10 px-5`}>*/}

              <main className="relative flex flex-1 flex-col gap-20">
                  <MaxWidthWrapper>
                      <Nav/>
                  </MaxWidthWrapper>
                  <FloatingNav navItems={navItems}/>
                  <section className="w-full">
                      <Hero/>
                  </section>
                  <section>
                      <Terminal/>
                  </section>
                  <section >
                    <ProjectViewer />
                  </section>
                  <section>
                      <ContactForm formToken={formspreetoken}/>
                  </section>
                  <Footer />
              </main>


              {/*</div>*/}
      </>


  );
}
