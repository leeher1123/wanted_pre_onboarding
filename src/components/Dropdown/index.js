import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'

const MENU_ITEMS = ['BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP']

function Dropdown() {
  const [filteredSymbols, setFilteredSymbols] = useState(MENU_ITEMS)
  const [currentItem, setCurrentItem] = useState('All Symbols')
  const [visibleSearchBox, setVisibleSearchBox] = useState(false)
  const [text, setText] = useState('')
  const symbolRef = useRef()

  const handleClickBox = useCallback(() => {
    setVisibleSearchBox(!visibleSearchBox)
    setText('')
  }, [visibleSearchBox])

  const handleClickItem = useCallback((e) => {
    const { name } = e.currentTarget.dataset
    setCurrentItem(name)
    setVisibleSearchBox(false)
  }, [])

  const handleChange = useCallback((e) => {
    const searchText = e.currentTarget.value.toLocaleLowerCase()
    setText(searchText)
  }, [])

  useEffect(() => {
    const filteredSymbols = MENU_ITEMS.filter((symbol) => symbol.toLocaleLowerCase().includes(text))
    setFilteredSymbols(filteredSymbols)
  }, [text])

  const onClose = (e) => {
    if (!symbolRef.current.contains(e.target)) {
      setVisibleSearchBox(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', onClose)
  })
  return (
    <div className={styles.container}>
      <div ref={symbolRef}>
        <div className={styles.dropdownBox} onClick={handleClickBox}>
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
                onChange={handleChange}
                value={text}
              />
            </div>
            <div className={styles.symbolItem} data-name='All Symbols' onClick={handleClickItem}>
              All Symbols
            </div>
            {filteredSymbols.map((symbol) => (
              <div className={styles.symbolItem} key={`item-${symbol}`} data-name={symbol} onClick={handleClickItem}>
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
