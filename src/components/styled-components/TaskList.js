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
    /* padding: 0 10px; */
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
    width: calc(100vw - 168px);
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 450px) {
        width: calc((100vw - 178px)/2);
    }
    @media (min-width: 800px) {
        width: calc((800px - 178px)/2);
    }
`
export const CategoryText = styled.p`
    width: 72px;
    line-height: 35px;
    margin-left: 10px;
`
export const InfoText = styled.p`
    line-height: 35px;
    margin-left: 10px;
    width: calc((100% - 106px)/2);
    display: none;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 450px) {
        display: block;
        width: calc((100vw - 178px)/2);
    }
    @media (min-width: 800px) {
        width: calc((800px - 178px)/2);
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
    margin-left: 76px;
    width: 72px;
    line-height: 35px;
    border-bottom: 1px solid;
`
export const TaskHeader = styled.div`
    width: calc(100vw - 168px);
    line-height: 35px;
    margin-left: 10px;
    border-bottom: 1px solid;
    @media (min-width: 450px) {
        width: calc(50% - 89px);
    }
`
export const InfoHeader = styled.div`
    /* width: calc((100% - 197px)/2); */
    line-height: 35px;
    margin-left: 10px;
    display: none;
    border-bottom: 1px solid;
    @media (min-width: 450px) {
        display: block;
        width: calc(50% - 89px);
    }
`