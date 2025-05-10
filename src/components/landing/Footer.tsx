
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LEGAL</h3>
            <p className="text-gray-400 mb-4">
              Conectividade de alta performance para eventos de todos os portes.
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">
              Email: contato@operadora.legal
            </p>
            <p className="text-gray-400 mb-2">
              Telefone: (11) 3333-4444
            </p>
            <p className="text-gray-400">
              WhatsApp: (11) 99999-9999
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-legal-cyan">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-legal-cyan">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-legal-cyan">Política de Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} LEGAL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
