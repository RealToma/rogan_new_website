import { Box } from "@material-ui/core";
import styled from 'styled-components'
import Mark01 from "../assets/images/rogan/mark01.png";

export const Information = (props) => {
    return (
        <StyledContainer id='information'>
            <Box display="flex" width="60%" border="2px solid #14f195" flexDirection="column" alignItems="center" borderRadius="10px" height="100%">
                <Box display="flex" flex="1" width="100%" justifyContent="center">
                    <Box display="flex" flex="1" alignItems="center" justifyContent={"center"}>
                        <img src={Mark01} width="80px" height={"80px"} alt="mark" />
                    </Box>
                    <Box display="flex" flex="2" flexDirection="column" >
                        <Box display="flex" flex="1" color="#14f195" fontSize="2rem" fontWeight={"bold"} alignItems="flex-end" marginBottom="5px">Rogan Coin (ROGAN)</Box>
                        <Box display="flex" flex="1" color="white" fontSize="2rem" fontWeight={"bold"} alignItems="flex-start">0.0000000008293USD (-46.39%)</Box>
                    </Box>
                </Box>
                <Box display="flex" flex="0.6" width="100%" color="white" borderTop="2px solid #14f195">
                    <Box display="flex" flex="1" flexDirection="column"  >
                        <Box display="flex" flex="1" alignItems="center" justifyContent="center" fontSize="1.5rem" fontWeight={"bold"}>RANK</Box>
                        <Box display="flex" flex="1" alignItems="center" justifyContent="center" fontSize="1.5rem" fontWeight={"bold"}>4146</Box>
                    </Box>
                    <Box display="flex" flex="1" flexDirection="column" borderLeft="2px solid #14f195">
                        <Box display="flex" flex="1" alignItems="center" justifyContent="center" fontSize="1.5rem" fontWeight={"bold"}>MARKET CAP</Box>
                        <Box display="flex" flex="1" alignItems="center" justifyContent="center" fontSize="1.5rem" fontWeight={"bold"}>$? USD</Box>
                    </Box>
                    <Box display="flex" flex="1" flexDirection="column"  borderLeft="2px solid #14f195">
                        <Box display="flex" flex="1" alignItems="center" justifyContent="center" fontSize="1.5rem" fontWeight={"bold"}>VOLUME</Box>
                        <Box display="flex" flex="1" alignItems="center" justifyContent="center" fontSize="1.5rem" fontWeight={"bold"}>$125.98K USD</Box>
                    </Box>
                </Box>
                <Box display="flex" flex="0.5" width="100%" color="white" borderTop="2px solid #14f195" fontSize="1.5rem" fontWeight={"bold"} alignItems="center" justifyContent="center" >
                    Powered by CoinMarketCap
                </Box>
            </Box>

        </StyledContainer>

    )
}
const StyledContainer = styled(Box)`
    display: flex;
    width: 100%;
    height: 400px;
    background: black !important;
    justify-content: center;
    align-items: center;
`