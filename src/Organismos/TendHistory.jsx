import { AuthContainer } from "../Moleculas/AuthContainer";
import { Navigation } from "../Moleculas/Navigation";
import { TendHistory } from "../Moleculas/tendHistory";

export function TendHistorial() {
  return (
    <>

        <AuthContainer className="bg-black animate-fade-up">
            <Navigation/>
            <TendHistory/>
        </AuthContainer>

    </>
  );
}
