import { getTags } from "@/lib/data/tags";

import Tags from "@/components/section/works/tags";

const Filters = async () => {
  try {
    const filters: ITag[] = await getTags();

    return <Tags filters={filters} />;
  } catch (error) {
    console.log(error);

    return <div>Oops! Something went wrong fetching tags...</div>;
  }
};

export default Filters;
