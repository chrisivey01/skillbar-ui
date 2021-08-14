import { BarContainer } from "./styles";

type SKillType = {
    children: any;
}
const Bar = ({ children }: SKillType) => {
    return <BarContainer>{children}</BarContainer>
}

export default Bar;