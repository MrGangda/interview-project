import styled from "@emotion/styled";

export const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
  background: #ffffff;  
  border-radius: 4px;   
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
  0px 2px 2px 0px rgba(0,0,0,0.14),
  0px 1px 5px 0px rgba(0,0,0,0.12);  
  padding: 16px;  
  transition: box-shadow 0.3s ease-in-out;  

  &:hover {
    box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),
    0px 16px 24px 2px rgba(0,0,0,0.14),
    0px 6px 30px 5px rgba(0,0,0,0.12); 
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

export const CardPrice = styled.div`
  margin-top: 5px;
  color: green;
`;

export const CardDiscount = styled.div`
  margin-top: 5px;
  color: red;
`;

export const CardDescription = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

export const DeleteButtonWrapper = styled.div`
  margin-top: auto;
`;
