
import { useRouter } from "next/router";
import OppDetails from "components/OppDetails";

export default function OppDetailsId() {
  const router = useRouter();
  const { oppId } = router.query;
  return (
    <div>
      <OppDetails></OppDetails>
    </div>
  );

}
