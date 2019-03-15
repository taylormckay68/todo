import styled from 'styled-components';

export const TaskListWrapper = styled.div`
    min-height: calc(100vh - 100px);
    max-width: 800px;
    width: 100%;
    background: lightgray;
`

export const TaskWrapper = styled.div`
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
`
export const TaskInfoWrapper = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    opacity: ${props => props.complete && '.4'};
`
export const TaskText = styled.p`
    line-height: 35px;
    margin-left: 10px;
    width: calc(100vw - 200px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: ${props => props.complete && 'line-through'};
    @media (min-width: 450px) {
        width: calc((100vw - 205px)/2);
    }
    @media (min-width: 800px) {
        width: calc((800px - 205px)/2);
    }
`
export const CategoryText = styled.p`
    width: 100px;
    line-height: 35px;
    margin-left: 10px;
    text-decoration: ${props => props.complete && 'line-through'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const InfoText = styled.p`
    line-height: 35px;
    margin-left: 10px;
    width: calc((100% - 136px)/2);
    display: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: ${props => props.complete && 'line-through'};
    @media (min-width: 450px) {
        display: block;
        width: calc((100vw - 205px)/2);
    }
    @media (min-width: 800px) {
        width: calc((800px - 205px)/2);
    }
`
export const TaskLabel = styled.label`
    display: flex;
    margin-left: 10px;
`
export const HeaderWrapper = styled.div`
    height: 35px;
    background-color: lightgray;
    display: flex;
`
export const CategoryHeader = styled.div`
    margin-left: 55px;
    width: 100px;
    line-height: 35px;
    font-weight: bolder;

`
export const TaskHeader = styled.div`
    width: calc(100vw - 168px);
    line-height: 35px;
    margin-left: 10px;
    font-weight: bolder;
    @media (min-width: 450px) {
        width: calc(50% - 103px);
    }
`
export const InfoHeader = styled.div`
    line-height: 35px;
    margin-left: 10px;
    display: none;
    font-weight: bolder;
    @media (min-width: 450px) {
        display: block;
        width: calc(50% - 89px);
    }
`
export const PriorityDot = styled.div`
    height: 10px;
    width: 10px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: ${props => {
        if(props.priority === 'High') return 'rgba(255,0,0)'
        if(props.priority === 'Medium') return 'rgba(255,255,0)'
        if(props.priority === 'Low') return 'green'
        }
    };
`
export const PriorityWrapper = styled.div`
    display: flex;
    align-items: center;
`