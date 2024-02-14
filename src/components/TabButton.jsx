

function TabButton({children, onSelect, isSelected}) {
    console.log('TabButton 컴포넌트 렌더링됨') ;
    return(
        <li><button className={isSelected ? 'active':null} onClick={onSelect}>{children}</button></li>
    )
}

export default TabButton;
