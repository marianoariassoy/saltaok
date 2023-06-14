const Logo = () => {
  return (
    <div className="logo bg-white rounded-full aspect-square object-cover flex items-center justify-center w-28 h-28 shadow-xl transition-all text-black hover:bg-black hover:text-white hover:rotate-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="71.4" viewBox="0 0 40.5 71.4">
        <path d="M4.3,16c-.8,0-1.4-.1-1.9-.3-.5-.2-.9-.5-1.2-.9s-.5-.9-.6-1.4c-.1-.6-.2-1.2-.2-1.9v-1.4H3.1v1.6c0,.8,0,1.4,.2,1.8s.5,.6,1,.6,.6,0,.8-.2,.3-.3,.3-.6c0-.3,0-.7,0-1.2s-.1-1.1-.4-1.6c-.3-.5-.7-1-1.3-1.5l-1.3-1.2c-.4-.3-.7-.7-1-1.1-.3-.4-.5-.8-.7-1.3-.2-.5-.3-1-.3-1.5,0-.8,.1-1.5,.4-2.1,.2-.6,.6-1,1.2-1.3,.6-.3,1.3-.4,2.3-.4s1.3,0,1.8,.3c.5,.2,.8,.5,1.1,.8,.3,.4,.5,.8,.6,1.4s.2,1.1,.2,1.8v1h-2.6v-1.1c0-.5,0-.9,0-1.2s-.2-.6-.3-.7c-.2-.2-.4-.2-.7-.2s-.5,0-.7,.2c-.2,.1-.3,.3-.4,.5,0,.2-.1,.5-.1,.9s0,.6,.1,.8c0,.2,.2,.5,.4,.7,.2,.2,.4,.5,.7,.7l1.5,1.4c.7,.7,1.3,1.4,1.7,2.1,.4,.7,.6,1.5,.6,2.4s-.1,1.7-.4,2.4c-.2,.6-.6,1.1-1.2,1.4-.6,.3-1.3,.5-2.3,.5Z" />
        <path className="bg-black" d="M8.5,15.9L11.1,.2h3.7l2.8,15.7h-2.6l-.4-2.8h-2.9l-.4,2.8h-2.7Zm3.3-4.7h2.4l-1.2-7.9h0l-1.1,7.9Z" />
        <path className="bg-black" d="M18.7,15.9V.2h2.8V13.8h3.5v2h-6.3Z" />
        <path className="bg-black" d="M26.6,15.9V2.3h-2.1V.2h7V2.3h-2.1V15.9h-2.8Z" />
        <path className="bg-black" d="M30.9,15.9L33.5,.2h3.7l2.8,15.7h-2.6l-.4-2.8h-2.9l-.4,2.8h-2.7Zm3.3-4.7h2.4l-1.2-7.9h0l-1.1,7.9Z" />

        <g className="text-primary">
          <path d="M0,31.5c0-2.2,.3-4,.9-5.5s1.4-2.7,2.6-3.5c1.1-.9,2.5-1.5,4.1-1.9s3.4-.6,5.5-.6h14.8c2.5,0,4.7,.4,6.6,1.1s3.4,2,4.5,3.6c1.1,1.7,1.6,3.9,1.6,6.7s-.3,3.9-.9,5.3c-.6,1.5-1.5,2.6-2.6,3.5-1.1,.9-2.5,1.5-4,1.9-1.5,.4-3.3,.6-5.1,.6H13c-2,0-3.8-.2-5.4-.5s-3-1-4.1-1.8c-1.1-.9-2-2-2.6-3.5s-.9-3.3-.9-5.5Zm5.6,0c0,.9,.2,1.6,.7,2.1,.5,.5,1.2,.8,2,.9s1.9,.2,3,.2H29.1c1.2,0,2.2,0,3.1-.3,.9-.2,1.5-.5,2-1,.5-.5,.7-1.1,.7-2s-.2-1.6-.7-2.1c-.5-.5-1.1-.8-2-1-.9-.2-1.9-.3-3.1-.3H11.4c-1.1,0-2.1,0-3,.3-.9,.2-1.5,.5-2,1-.5,.5-.7,1.2-.7,2.1Z" />
          <path d="M.5,46.8H39.9v8.1H22.1l18,7.8v8.2l-19.5-8.8L.5,71.4v-8.2l18.8-8.3H.5v-8.1Z" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
