import React, { useEffect } from "react";
import Carousel from "../components/carousel";
import { useQuery } from "react-query";
import { getPlaying } from "../services";
import { queryClient } from "../query-client";
// import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return (
    queryClient.getQueryData("playing") ??
    (await queryClient.fetchQuery("playing", async () => getPlaying(), {
      staleTime: 5000,
    }))
  );
};

const Home = () => {
  const { data } = useQuery("playing", getPlaying);

  useEffect(() => {
    console.log(data.results);
  }, []);

  return (
    <section className="container bg-dark pt-5">
      <Carousel>
        {data.results.map((res) => {
          return (
            <div className="row">
              <div className="col-sm">
                <img
                  src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
                  width={600}
                  height="auto"
                />
              </div>
              <div className="col-sm">
                <p className="text-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  odio eaque incidunt ut minus velit doloribus culpa ab nihil
                  inventore sit obcaecati qui eius eveniet aperiam quisquam
                  tempore sequi, ullam fuga illum maxime. Quia delectus odit
                  temporibus enim culpa facilis animi, quam quisquam deleniti
                  amet voluptatem et unde aut facere maxime ipsum autem dolorum
                  asperiores consequuntur nam doloremque consequatur possimus
                  modi! Hic voluptate molestias voluptas, atque aliquid ullam
                  doloremque sed, voluptatem sapiente pariatur veniam dolorem
                  placeat? Incidunt sint ad voluptas odio amet. Nulla inventore
                  nam officiis atque dicta, dolore, eos ad doloremque, quidem
                  laudantium cupiditate quae possimus asperiores saepe. Quam qui
                  reiciendis nihil, nesciunt accusantium veniam animi suscipit
                  perferendis. Pariatur sed in earum tempora dicta doloremque
                  dolor impedit sequi, velit a alias, assumenda repudiandae
                  itaque nostrum maxime qui blanditiis! Voluptas aspernatur
                  cupiditate autem quas sapiente, iusto laudantium molestias a
                  possimus, debitis totam mollitia fugit. Velit, voluptatum
                  voluptatibus eveniet similique dolor officia commodi! Minima
                  impedit, et fuga quod accusantium odit nam obcaecati adipisci?
                  Laboriosam laudantium nostrum sequi soluta. Molestiae quasi
                  quae obcaecati aspernatur eaque inventore modi non? Vitae
                  distinctio dolorum molestiae adipisci, error harum.
                  Blanditiis, non accusamus! Impedit perspiciatis non error
                  corrupti sint blanditiis aliquid consequatur ab aut dicta
                  omnis adipisci provident, laborum architecto doloribus?
                  Voluptas rem molestiae nam ea tenetur vitae dolore tempore
                  cupiditate saepe quidem voluptates assumenda temporibus, eius
                  delectus earum soluta sunt quasi illo voluptatibus dicta quam.
                  Ullam odio, architecto suscipit exercitationem modi autem
                  laboriosam dignissimos adipisci recusandae nihil perspiciatis,
                  eos vitae! Odio officiis harum illo dolorum nobis facere cum
                  exercitationem sit magni! Ipsum aliquid eum harum fuga
                  molestias libero perspiciatis aspernatur vero autem atque,
                  asperiores eos ratione expedita, optio, id quibusdam officia?
                  Minus, quaerat? Deleniti earum voluptates, quis ipsam, ut ad
                  inventore consectetur laboriosam, eaque sunt facere doloremque
                  enim corrupti unde. Magni laboriosam illum non porro quaerat.
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
      <button className="btn btn-danger">Click This</button>
    </section>
  );
};

export default Home;
