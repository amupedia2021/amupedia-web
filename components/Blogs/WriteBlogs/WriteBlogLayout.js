import { useState } from "react";
import {
  Sidebar,
  Main,
  Wrapper,
  BlogTitle,
  BlogContent,
  TitlePlaceholder,
  TitleWrapper,
} from "./WriteBlogLayoutStyles";

const WriteBlogLayout = () => {
  const [heading, setHeading] = useState("");
  return (
    <Wrapper>
      <Sidebar>Hello World</Sidebar>
      <Main>
        <TitleWrapper>
          <BlogTitle
            heading={heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
            html={heading}
            tagName="h2"
          />
          <TitlePlaceholder heading={heading}>{heading == '' && "Enter your blog's title"}</TitlePlaceholder>
        </TitleWrapper>
        <BlogContent>
          nisi veniam temporibus inventore, quas similique, nihil et laborum
          omnis itaque facere est ducimus necessitatibus? Voluptates iste, earum
          doloremque explicabo ad commodi quam adipisci? Aliquam similique
          eligendi, ipsa earum tempora quia ipsum, magni maxime autem officia
          veniam debitis nobis illo unde non obcaecati ex animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non quaerat quod impedit dolores fugit veritatis necessitatibus enim laborum, libero nisi perferendis esse maiores consequuntur id veniam explicabo, magnam assumenda, quam nesciunt itaque possimus! Natus vitae eius cupiditate reprehenderit impedit nostrum saepe fugiat consectetur corporis! Tempora exercitationem odio quia sunt tempore architecto hic sed nemo quae, a dolorum voluptatum voluptate, tenetur ullam officia laboriosam repellat, repudiandae maxime impedit fuga? Excepturi quidem expedita consequuntur rem cum exercitationem ex, fugit dolores esse asperiores minima reprehenderit quo nisi neque officiis sapiente accusamus minus dolorum repellendus nemo nobis maiores laborum dignissimos. Esse ea aliquam eius beatae ratione fugit inventore officia ipsa, aperiam repudiandae aspernatur harum, voluptates repellendus consequuntur nemo. Nobis aliquid totam, repudiandae nam consequatur vitae impedit voluptatem minus, laudantium animi, velit molestiae quos est accusantium debitis tempore! Qui praesentium ipsam optio, ea nam quas neque reprehenderit! Maiores illo assumenda adipisci odio, similique ut eligendi corrupti ratione commodi exercitationem fuga, accusamus iure reprehenderit porro molestiae quia necessitatibus. Quae dolorem, architecto rerum ad deleniti possimus eveniet pariatur sint, magni distinctio totam ipsa repellat blanditiis doloremque, quibusdam error itaque ratione suscipit iste. Corporis incidunt expedita commodi odio dignissimos. Suscipit quas accusantium, ipsa aut explicabo ullam voluptatem, voluptatibus, quisquam qui repellat iste saepe. Ea a earum sapiente molestiae, autem corporis, illum est ad facilis, dolores dolor! Tempore, nulla quia.
        </BlogContent>
      </Main>
    </Wrapper>
  );
};

export default WriteBlogLayout;
