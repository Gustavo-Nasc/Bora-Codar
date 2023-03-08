import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import card9 from "../assets/card9.png";

export interface CardType {
    imgSrc: string,
    imgAlt: string,
    title: string,
    description: string,
    city: string
}

export const CARDS: readonly CardType[] = [
    {
        imgSrc: card1,
        imgAlt: "O Python do vovô não sobe mais",
        title: "O Python do vovô não sobe mais",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "São Paulo - SP",
    },
    {
        imgSrc: card2,
        imgAlt: "Todo mundo null",
        title: "Todo mundo null",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "Florianópolis - SC",
    },
    {
        imgSrc: card3,
        imgAlt: "Hoje dou exception",
        title: "Hoje dou exception",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "Curitiba - PR",
    },
    {
        imgSrc: card4,
        imgAlt: "Manda Node",
        title: "Manda Node",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "Salvador - BA",
    },
    {
        imgSrc: card5,
        imgAlt: "Só no back-end",
        title: "Só no back-end",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "São Paulo - SP",
    },
    {
        imgSrc: card6,
        imgAlt: "Esse anel não é de Ruby",
        title: "Esse anel não é de Ruby",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "São Paulo - SP",
    },
    {
        imgSrc: card7,
        imgAlt: "Pimenta no C# dos outros é refresco",
        title: "Pimenta no C# dos outros é refresco",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "Rio de Janeiro - RJ",
    },
    {
        imgSrc: card8,
        imgAlt: "EnCACHE aqui",
        title: "EnCACHE aqui",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "Porto Alegre - RS",
    },
    {
        imgSrc: card9,
        imgAlt: "Não valho nada mas JAVA li",
        title: "Não valho nada mas JAVA li",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        city: "São Paulo - SP",
    }
]