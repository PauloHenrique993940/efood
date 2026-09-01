import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  background-color: ${cores.branca};
  width: 100%;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding-bottom: 18px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  display: block;
  position: relative;
  object-fit: cover;
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
`;

export const TagButton = styled.span`
  background-color: ${cores.rosa};
  border: none;
  padding: 6px 8px;
  font-size: 12px;
  margin-left: 6px;
  color: ${cores.branca};
  font-weight: bold;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 18px 8px;
`;

export const Rating = styled.div`
  color: ${cores.cortextForms};
  font-size: 15px;
  margin-left: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: ${cores.cortextForms};
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 1.45;
  color: #6d6d6d;
  margin: 0 18px;
`;


