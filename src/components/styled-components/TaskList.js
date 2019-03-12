import styled from 'styled-components';

export const TaskListWrapper = styled.div`
    min-height: calc(100vh - 100px);
    max-width: 800px;
    width: 100%;
    background: lightgray;
    border: 1px solid black;
`

export const TaskWrapper = styled.div`
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 0 25px;
`
export const TaskInfoWrapper = styled.div`
    width: 100%;
    cursor: pointer;
`
export const TaskText = styled.p`
    line-height: 35px;
    margin-left: 20px;
`
export const TaskLabel = styled.label`
    display: flex;
`