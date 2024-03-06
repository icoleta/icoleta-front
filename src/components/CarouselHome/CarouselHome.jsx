import { useState } from "react"

import papeis from "../../assets/papel.jpg"
import metais from "../../assets/metal.jpg"
import plasticos from "../../assets/plastico.png"
import vidros from "../../assets/vidro.jpg"
import pilhas from "../../assets/pilhas.jpg"

import "./CarouselHome.css"

const CarouselHome = () => {
    const informacoes = [
        { img: papeis, titulo: "Papéis", descricao: `O tempo de decomposição dos papéis varia significativamente dependendo de vários fatores, como o tipo de papel, as condições ambientais e os processos de reciclagem. Em geral, os papéis comuns, como os utilizados em jornais, revistas e embalagens, podem levar de semanas a alguns meses para se decompor completamente em condições ideais de compostagem. No entanto, em aterros sanitários, onde o ambiente é anaeróbico e os resíduos são compactados, o processo de decomposição pode ser muito mais lento, levando décadas, e em alguns casos até séculos, para que os papéis se decomponham totalmente. Isso ressalta a importância da redução do consumo de papel, da reciclagem e da adoção de práticas sustentáveis ​​para minimizar o impacto ambiental dos resíduos de papel.` },
        {
            img: metais, titulo: "Metais", descricao: `
        O tempo de decomposição dos metais é notavelmente longo em comparação com outros materiais comuns. Ao contrário dos materiais orgânicos, como papel ou plástico, os metais não se decompõem facilmente na natureza. Em vez disso, os metais podem persistir no ambiente por centenas, ou até milhares, de anos. Isso ocorre devido à sua natureza altamente estável e resistente à corrosão. Enquanto alguns metais podem sofrer pequenas mudanças superficiais ao longo do tempo devido à exposição a elementos como água e oxigênio, sua estrutura básica permanece intacta. Essa durabilidade é tanto uma bênção quanto uma maldição; embora os metais sejam valiosos para aplicações industriais e de construção de longo prazo, seu descarte inadequado pode resultar em poluição ambiental significativa. Portanto, é crucial promover práticas de reciclagem eficazes para reduzir a quantidade de resíduos de metais que acabam em aterros sanitários ou no ambiente natural, minimizando assim seu impacto negativo no meio ambiente.` },
        {
            img: plasticos, titulo: "Plásticos", descricao: `
        O tempo de decomposição dos plásticos é uma questão preocupante devido à sua persistência no meio ambiente. Os plásticos são compostos por cadeias de polímeros que são notoriamente resistentes à decomposição biológica. Dependendo do tipo de plástico e das condições ambientais, o tempo de decomposição pode variar significativamente. Por exemplo, alguns plásticos podem levar centenas de anos ou até milênios para se decompor completamente. Durante esse período, os plásticos podem se fragmentar em microplásticos, que são pequenos pedaços de plástico com menos de 5 milímetros de tamanho. Esses microplásticos podem persistir no ambiente por muito tempo, representando uma ameaça para a vida marinha, a saúde humana e os ecossistemas terrestres. Portanto, é crucial adotar medidas para reduzir o uso de plásticos descartáveis, promover a reciclagem e investir em alternativas mais sustentáveis ​​para minimizar o impacto ambiental dos plásticos.` },
        { img: vidros, titulo: "Vidros", descricao: `O tempo de decomposição dos vidros é notavelmente longo, fazendo deles um dos materiais mais duráveis encontrados na natureza. Devido à sua composição principalmente mineral, os vidros podem levar séculos, ou até mesmo milênios, para se decompor completamente. Ao contrário de materiais orgânicos que se degradam ao longo do tempo, os vidros mantêm sua estrutura molecular praticamente inalterada, mesmo quando expostos a condições ambientais extremas. Essa durabilidade excepcional dos vidros os torna altamente desejáveis para muitas aplicações, como embalagens e recipientes de armazenamento de longo prazo. No entanto, quando descartados incorretamente, os vidros podem representar um problema ambiental significativo, ocupando espaço em aterros sanitários e, em alguns casos, representando riscos para a vida selvagem e o ecossistema. Portanto, é importante promover a reciclagem de vidros para reduzir a quantidade de resíduos e minimizar seu impacto negativo no meio ambiente.` },
        {
            img: pilhas, titulo: "Pilhas", descricao: `
        O tempo de decomposição das pilhas é extremamente variável e depende principalmente do tipo de pilha e dos materiais utilizados em sua composição. Pilhas comuns, como as alcalinas, geralmente contêm metais pesados ​​como mercúrio, chumbo e cádmio, que são altamente tóxicos e persistentes no ambiente. Como resultado, as pilhas podem levar décadas, ou até mesmo séculos, para se decompor completamente. Durante esse tempo, os metais tóxicos presentes nas pilhas podem vazar e contaminar o solo e a água, representando sérios riscos para a saúde humana e o meio ambiente. Além disso, a decomposição inadequada das pilhas pode contribuir para a poluição ambiental e a degradação dos ecossistemas. Portanto, é essencial promover práticas de descarte adequado e reciclagem de pilhas para minimizar os danos causados ​​ao meio ambiente e à saúde pública.` },
    ]

    const [isSelected, setIsSelected] = useState(0);

    const handleItemClick = (index) => {
        setIsSelected(index)
    }

    return (
        <div className="flex flex-col gap-[42px] h-[500px] justify-center items-center transition-all">
            <div className="flex gap-[32px]">
                <img src={informacoes[isSelected].img} alt="" className="rounded my-auto max-h-[364px] w-[500px]" />

                <div className="flex flex-col max-w-[650px]">
                    <h3 className="text-4xl font-bold text-white">
                        {informacoes[isSelected].titulo}
                    </h3>
                    <p className="mt-4 text-lg font-normal text-white" >
                        {informacoes[isSelected].descricao}
                    </p>
                </div>
            </div>
            <div className="flex gap-[12px]">
                {
                    informacoes.map((_, index) => (
                        <div
                            key={index}
                            id={`info-${index + 1}`}
                            className={`rounded-full ${isSelected === index ? 'bg-[#4B9093]' : 'bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'} w-[30px] h-[30px] cursor-pointer`}
                            onClick={() => handleItemClick(index)}
                        >
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default CarouselHome;