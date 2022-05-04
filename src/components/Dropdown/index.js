import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'

const MENU_ITEMS = ['BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP']

function Dropdown() {
  const [filteredSymbols, setFilteredSymbols] = useState(MENU_ITEMS)
  const [currentItem, setCurrentItem] = useState('All Symbols')
  const [visibleSearchBox, setVisibleSearchBox] = useState(false)
  const [value, setValue] = useState('')
  const symbolRef = useRef()

  const onClickBox = useCallback(() => {
    setVisibleSearchBox(!visibleSearchBox)
    setValue('')
  }, [visibleSearchBox])

  const onClickItem = useCallback((e) => {
    setVisibleSearchBox(false)
    setCurrentItem(e.currentTarget.innerText)
  }, [])

  const onChangeText = useCallback((e) => {
    const searchText = e.currentTarget.value.toLocaleLowerCase()
    setValue(searchText)
  }, [])

  useEffect(() => {
    const filteredSymbols = MENU_ITEMS.filter((symbol) => {
      return symbol.toLocaleLowerCase().includes(value)
    })
    setFilteredSymbols(filteredSymbols)
  }, [value])

  const onClose = (e) => {
    if (!symbolRef.currentTarget.contains(e.target)) {
      setVisibleSearchBox(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', onClose)
  })
  return (
    <div className={styles.container}>
      <div ref={symbolRef}>
        <div className={styles.dropdownBox} onClick={onClickBox}>
          {currentItem}
          <span>
            <RiArrowDropDownFill />
          </span>
        </div>
        {visibleSearchBox && (
          <div className={styles.symbolMenu}>
            <div className={styles.searchBox}>
              <div className={styles.searchIcon}>
                <BiSearch />
              </div>
              <input
                className={styles.inputBox}
                type='text'
                placeholder='Search Symbol'
                onChange={onChangeText}
                value={value}
              />
            </div>
            <div className={styles.symbolItem} onClick={onClickItem}>
              All Symbols
            </div>
            {filteredSymbols.map((symbol) => (
              <div className={styles.symbolItem} key={symbol} onClick={onClickItem}>
                {symbol}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
