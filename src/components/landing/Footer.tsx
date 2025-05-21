const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LEGAL</h3>
            <p className="text-gray-400 mb-4">Conectividade e tecnologia de alta performance para eventos e negócios de todos os tamanhos.</p>
            <p className="text-gray-400">CNPJ: 54.753.156/0001-72</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a className="hover:text-legal-cyan mb-3" href="mailto:gustavo@operadora.legal?subject=LEGAL, quero contratar agora.">Email: sos@operadora.legal</a>
              </li>
              <li>
                <a className="hover:text-legal-cyan mb-3" href="tel:1151942223">Telefone: (11) 5194-2223</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://maps.app.goo.gl/FcbRg9obqNt3vQMw7" className="hover:text-legal-cyan">R. Salvador Simões, 801, 13 Andar, 1310 - Vila Dom Pedro I, São Paulo - SP</a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/FcbRg9obqNt3vQMw7" className="hover:text-legal-cyan">CEP: 04276-000</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} LEGAL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;