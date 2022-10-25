import { useGlobalContext } from "../utils/context";
import { i18n } from "../utils/i18n";

export default function Home() {
  const {
    state: { direction },
  } = useGlobalContext();
  const translation =
    direction === "rtl" ? i18n.pageHeading.fa : i18n.pageHeading.en;
  return (
    <div className="container">
      <h2>{translation.welcome}</h2>
    </div>
  );
}
