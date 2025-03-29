/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../../assets/importAssets/WhatsAppIcon.webp";
import {
  CiUser,
  CiPhone,
  CiMail,
  CiShop,
  CiCreditCard1,
  CiFileOn,
} from "react-icons/ci";
import content from "../../../content/content";
import contentLp01 from "../../../content/contentLp01";

const FormCard2 = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [subscription, setSubscription] = useState("");
  const [profission, setProfission] = useState("");

  // const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setName(capitalizeFirstLetter(onlyLetters));
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^\d]/g, ""); // Remove tudo que não for número
    setPhone(formatPhoneNumber(input));
  };

  const sendToWhatsapp = async () => {
    // setIsSubmitting(true);
    const validationErrors = {};

    // Validação de campos
    if (!name) {
      validationErrors.name = "O campo Nome é obrigatório.";
    } else if (!validateName(name)) {
      validationErrors.name = "Preencha o nome completo";
    }

    if (!phone) {
      validationErrors.phone = "O campo Telefone é obrigatório.";
    } else if (!validatePhone(phone)) {
      validationErrors.phone = "Número inválido.";
    }

    if (!email) {
      validationErrors.email = "O campo E-mail é obrigatório.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "E-mail inválido.";
    }

    if (!empresa) {
      validationErrors.empresa =
        "O campo Orgão de Classe ou Empresa é obrigatório.";
    } else !validateEmpresa(empresa);

    if (!subscription) {
      validationErrors.subscription = "O campo Inscrição é obrigatório.";
    } else !validateSubscription(subscription);

    if (!profission) {
      validationErrors.profission = "O campo Função é obrigatório.";
    } else !validateProfission(profission);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Aqui o número do WhatsApp precisa estar no formato correto
    const whatsappNumber = "45991290837"; // Envio pro wpp
    const formatPhone = (phone) => {
      const formattedPhone = phone.replace(/\D/g, ""); // Remove caracteres não numéricos
    
      if (formattedPhone.length !== 11) return phone; // Retorna original se não tiver 11 dígitos
    
      return formattedPhone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    };

    const whatsappMessage = `Olá! 
Essa é uma mensagem de inscrição do curso ${content.texts.proximosCursos.card1.title}, 
o meu grupo é o de ${contentLp01.subscription.cards.card2.title}. 
%0A
%0A
Meu nome é ${name}.%0A
Cpf: ${cpf}.%0A
Telefone: ${phone}.%0A
E-mail: ${email}.%0A
Instituição: ${empresa}.%0A
Inscrição: ${subscription}.%0A
Profissão: ${profission}.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Abrir WhatsApp em uma nova aba
    try {
      window.open(whatsappURL, "_blank");
    } catch (error) {
      console.error("Erro ao abrir o WhatsApp: ", error);
    }

    // Limpar os campos após o envio
    setName("");
    setPhone("");
    setEmail("");
    setCpf("");
    setSubscription("");
    setProfission("");
    setUf("");
    setMessage("");
    setIsSubmitting(false);
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return namePattern.test(name.trim());
  };

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/\D/g, ""); // Remove caracteres não numéricos
    return cleanedPhone.length >= 10; // Pelo menos 10 dígitos
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
  };
  const validateEmpresa = (empresa) => {
    const empresaPattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return empresaPattern.test(empresa.trim());
  };

  const validateSubscription = (subscription) => {
    const subscriptionPattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return subscriptionPattern.test(subscription.trim());
  };

  const validateProfission = (profission) => {
    const profissionPattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return profissionPattern.test(profission.trim());
  };

  const validateCpf = (cpf) => {
    const cpfPattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return cpfPattern.test(cpf.trim());
  };

  const formatPhoneNumber = (phoneNumber) => {
    let cleaned = phoneNumber.replace(/\D/g, ""); // Remove tudo que não for número

    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11); // Limita a 11 dígitos

    // Formatação dinâmica conforme o número é digitado
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 6)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(
        6
      )}`;
    }
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7
    )}`;
  };

  return (
    <div className=" bg-[#0E2B40] p-6 rounded-[10px] w-full h-auto">
      <div className="w-full text-paragraph3 phone3:text-paragraph4 ">
        {/* <h1 className="w-full mb-2 font-medium text-white">Fale conosco</h1> */}
        {/* Nome */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiUser />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nome"
              required
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>{" "}
        {/* Cpf */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiCreditCard1 />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Cpf"
              required
            />
          </div>
          {errors.cpf && <p className="text-red-500">{errors.cpf}</p>}
        </div>
        {/* Telefone */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiPhone />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Telefone"
              required
            />
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        {/* Email */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiMail />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        {/* Instituição */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiShop />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="Órgão de classe a que pertence OU empresa em que trabalha"
              required
            />
          </div>
          {errors.empresa && <p className="text-red-500">{errors.empresa}</p>}
        </div>
        {/* Inscrição */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiFileOn />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="subscription"
              value={subscription}
              onChange={(e) => setSubscription(e.target.value)}
              placeholder="Inscrição"
              required
            />
          </div>
          {errors.subscription && (
            <p className="text-red-500">{errors.subscription}</p>
          )}
        </div>
        {/*Profissão */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-white">
              <CiUser />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="profission"
              value={profission}
              onChange={(e) => setProfission(e.target.value)}
              placeholder="Profissão"
              required
            />
          </div>
          {errors.profission && (
            <p className="text-red-500">{errors.profission}</p>
          )}
        </div>
        {/* Botão */}
        <button
          type="button"
          className="flex items-center w-full font-medium text-[#0E2B40] bg-primary transition-all rounded-lg h-10 phone2:h-12 hover:scale-105"
          onClick={sendToWhatsapp}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={WhatsAppIcon}
              className="w-6 h-6 mr-2 phone2:w-8 phone2:h-8"
              alt="WhatsApp Icon"
            />
            <p>{isSubmitting ? "Enviando..." : "Enviar inscrição"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FormCard2;
