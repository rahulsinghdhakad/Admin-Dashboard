import { FormEvent, useEffect, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const allNumbers = "1234567890";
const allCharacters = "qwertyuiopasdfghjklmnvbxczv";
const allSymbols = "!@#$%^&*()_+"

const Coupens = () => {
  const [prefix, setPrefix] = useState<string>("");
  const [size, setSize] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupen, setCoupen] = useState<string>("");

  const copyHandle=async()=>{
    await window.navigator.clipboard.writeText(coupen);
    setIsCopied(true);
  }
  useEffect(() => {
    setIsCopied(false)

  }, [coupen])
  

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!includeCharacters && !includeNumbers && !includeSymbols) return alert("please select one")

    let result: string = prefix;
    let allList = "";

    if (includeNumbers) allList += allNumbers;
    if (includeCharacters) allList += allCharacters;
    if (includeSymbols) allList += allSymbols;


    for (let i = 0; i < size - prefix.length; i++) {
      const index = ~~(Math.random() * allList.length);
      result += allList[index];
    }
    setCoupen(result)
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Coupen</h1>
        <section className="coupen">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="text to inclue"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
            />
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />

            <fieldset>
              <legend>Include</legend>

              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(prev => !prev)} />
              <span>Numbers</span>

              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacters(prev => !prev)} />
              <span>Characters</span>

              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(prev => !prev)} />
              <span>Symbols</span>
            </fieldset>

            <button type="submit">
              Generate
            </button>
          </form>
          {
            coupen &&
            <code onClick={copyHandle}>
              {coupen}
              <span>
                {
                  isCopied?
                  "copied":
                  "copy"
                }
              </span>
            </code>
          }
        </section>
      </main>
    </div>
  )
}

export default Coupens