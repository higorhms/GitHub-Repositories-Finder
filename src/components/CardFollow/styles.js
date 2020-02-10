import styled from 'styled-components';

export const Container = styled.div``;

export const Card = styled.div`
   box-shadow: 0px 0px 8px 0px #999;
   color: #24292e;
   border-radius: 4px;
`;

export const CardHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 4px 4px 0px 0px;
   background: #eee;

   h1 {
      font-size: 14px;
      padding: 5px;
   }
`;

export const CardContent = styled.div`
   background: #fff;
   border-radius: 4px 4px 4px 4px;
`;

export const List = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
   grid-gap: 10px;
   padding: 10px;

   height: 200px;
   overflow-y: scroll;
   ::-webkit-scrollbar {
      display: none;
   }
`;

export const Avatar = styled.img`
   height: 50px;
   width: 50px;
   border-radius: 50%;
   background: #eee;
   border: 1px solid #24292e;
`;
