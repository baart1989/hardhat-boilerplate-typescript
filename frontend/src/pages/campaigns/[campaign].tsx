import { useRouter } from "next/router";

const Campaign = () => {
  const router = useRouter();
  const { campaign } = router.query;

  return (
    <>
      <h2>
        {campaign}
      </h2>
    </>
  );
};

export default Campaign;
