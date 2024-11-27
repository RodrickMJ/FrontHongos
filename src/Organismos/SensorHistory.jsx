import { AuthContainer } from "../Moleculas/AuthContainer";
import { Navigation } from "../Moleculas/Navigation";
// import SensorDataTable from "../Moleculas/SensorTable";
import SensorHistory from "../Moleculas/SensorReadings";

export function SensorHistorial() {
  return (
    <>

        <AuthContainer className="bg-black animate-fade-up">
            <Navigation/>
           <SensorHistory/>
        </AuthContainer>

    </>
  );
}
