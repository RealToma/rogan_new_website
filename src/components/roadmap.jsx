import { Box } from "@material-ui/core";
import {
    Timeline,
    Events,
    TextEvent,
} from '@merc/react-timeline';
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im"
import styled from 'styled-components'

export const Roadmap = (props) => {
    return (
        <StyledContainer id='roadmap'>
            <Box display={"flex"} flexDirection="column" alignItems="center" className="section-title">
                <h2>
                    Roadmap
                </h2>
                <p>
                    Rogan is a WebTorrent-powered content delivery platform
                </p>
            </Box>
            <Timeline color={"black"}>
                <Events>
                    <TextEvent date="Year 2022" text="" >
                        <Box display={"flex"} flexDirection={"column"}>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxChecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Project Inception</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxChecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Token contract creation and deployment</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}1000 holders</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Listing on Coingecko</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Marketing and awareness</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Rogan Mobile App</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Listing on a major centralized exchange</Box>
                            </Box>
                        </Box>
                    </TextEvent>
                    <TextEvent date="Year 2023" text="" >
                        <Box display={"flex"} flexDirection={"column"}>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}ROGAN platform Alpha Release</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Inception of ROGAN chain</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Hiring process of Core blockchain engineers</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Rogan chain test-net release</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Rogan chain main-net beta release</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}ROGAN token swap from Binance smartchain to main-net</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}Rogan Chain Alpha release</Box>
                                <Box display="flex" flex={"1"} alignItems={"center"} fontSize={"20px"}><ImCheckboxUnchecked color="#14F195" />{'\u00a0'}{'\u00a0'}{'\u00a0'}1000 live network validators</Box>
                            </Box>
                        </Box>
                    </TextEvent>
                </Events>
            </Timeline>
        </StyledContainer>

    )
}
const StyledContainer = styled(Box)`
    .cLpDkP::after {
        background-color: #14F195;
        width: 2px;
    }
    .guaETY.guaETY {
        border: 2px solid #14F195;
        background: black;
        &:hover{
            border: 3px solid #14F195;
            transition: all 0.3s linear;
        }
    }
    .igjtNr.igjtNr {
        position: relative;
        background-color: #14F195;
        padding: 10px;
        color: #fff;
        border-radius: 4px;
        font-weight: 800;
        font-size: 1.5rem;
        &:hover{
            color: #333;
            background-color: white;
            transition: all 0.3s linear;
        }
    }

`