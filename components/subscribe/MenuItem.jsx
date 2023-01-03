const MenuItem = ({ num, title, isActive }) => {
  return (
    <li className={`flex items-center gap-x-5 font-fraunces border-b-2 border-grey/25 py-4 cursor-pointer ${!isActive && "group"}`}>
      <span className={`text-[24px] leading-[32px] ${isActive ? "text-darkCyan" : "text-grey"}`}>{ num }</span>
      <h3 className={`text-[24px] leading-[32px] ${isActive ? "text-darkGreyBlue" : "text-grey"} ${!isActive && "group-hover:text-darkGreyBlue"}`}>{ title }</h3>
    </li>
  );
};

export default MenuItem;
