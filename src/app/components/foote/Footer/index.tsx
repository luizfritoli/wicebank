import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <span>© Pensado e feito por <strong>Luiz Fritoli</strong>.</span>
      <p>
        <strong>TypeScript</strong>, <strong>CSS</strong> e <strong>React.js</strong> foram
        utilizados para a montagem da aplicação. Escrito com <strong>Visual Studio Code</strong>.
      </p>
      <a href="https://luizfritoli.vercel.app" target="_blank" rel="noreferrer">
        <Image src="/logo_luiz.png" alt="Logo Luiz Fritoli" width={50} height={50} priority />
      </a>
    </footer>
  )
};

export default Footer;