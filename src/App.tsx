import { useEffect, useRef, useState } from 'react'
import './App.css'
import videoSrc from './hf_20260119_234827_b6efa364-8384-440b-8f44-107a6ed7c86e.mp4'
import imageSrc from './hf_20260119_232115_870c2b8e-0598-405b-9080-aa9f754173ba.png'
import moneyImage from './hf_20260120_102818_9a09a551-2d69-4345-ab36-3bebd4c3c39f-removebg-preview.png'
import characterImage from './hf_20260120_002431_b4c4ddf5-fcb1-44f6-8663-c64c4cce5780__1_-removebg-preview.png'
import flagImage from './Screenshot 2026-01-20 113620.png'

function TypewriterSection() {
  const lines = [
    'Current Street Price: 5.67 SOL per pound',
    'Bulk Discounts Available for Verified Degens',
    'Encrypted Contact: greencocaine@proton.fake',
    'Signal Line: +666 420 1337'
  ]
  
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const currentLine = lines[currentLineIndex]
    
    if (isTyping) {
      if (displayedText.length < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentLine.slice(0, displayedText.length + 1))
        }, 50)
        return () => clearTimeout(timer)
      } else {
        // Line finished typing - trigger glitch
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 300)
        
        // Wait before clearing
        setTimeout(() => {
          setIsTyping(false)
          setDisplayedText('')
          
          // Move to next line
          setTimeout(() => {
            setCurrentLineIndex((prev) => (prev + 1) % lines.length)
            setIsTyping(true)
          }, 1000)
        }, 2000)
      }
    }
  }, [displayedText, isTyping, currentLineIndex, lines])

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <div className={`typewriter-section ${isGlitching ? 'glitch' : ''}`}>
      <span className="typewriter-text">
        {displayedText}
        <span className={`cursor ${showCursor ? 'visible' : ''}`}>_</span>
      </span>
    </div>
  )
}

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [copied, setCopied] = useState(false)
  
  const contractAddress = '7SK5Q1tdBVeCpZXJ9YtQdgVCoxeUeH6yHJGwj9nepump'
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Play video and let it loop continuously
    video.play().catch((error) => {
      console.error('Error playing video:', error)
    })
  }, [])

  return (
    <div className="App" style={{ backgroundImage: `url(${flagImage})` }}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">GREEN COCAINE</div>
          <div className="nav-links">
            <a href="https://x.com/GreenCoco_dev" target="_blank" rel="noopener noreferrer" className="nav-link">TWITTER</a>
            <a href="#green-cocaine" className="nav-link">PRODUCT</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </div>
        </div>
      </nav>
      <div className="money-rain">
        {Array.from({ length: 50 }).map((_, i) => {
          const isCharacter = i % 3 === 0; // Every 3rd item is the character
          const imageSrc = isCharacter ? characterImage : moneyImage;
          const className = isCharacter ? `money-bill character-bill money-${i + 1}` : `money-bill money-${i + 1}`;
          
          return (
            <img
              key={i}
              src={imageSrc}
              alt=""
              className={className}
              style={{
                left: `${(i * 2) % 100}%`,
                animationDelay: `${(i * 0.2) % 5}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            />
          );
        })}
      </div>
      <div className="vignette-overlay"></div>
      <div className="video-container">
        <video
          ref={videoRef}
          src={videoSrc}
          className="hero-video"
          playsInline
          muted
          loop
          autoPlay
        />
      </div>
      
      <TypewriterSection />
      
      <div id="green-cocaine" className="content-section">
        <div className="text-container">
          <div className="classified-frame">
            <div className="particles-background">
              <div className="smoke"></div>
              <div className="smoke"></div>
              <div className="smoke"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
            </div>
            <h1 className="green-text neon-title">Green Cocaine</h1>
            <div className="description-text">
              <p className="fade-slide-in" style={{ animationDelay: '0.1s' }}>
                Green Cocaine comes from a <span className="highlight">mythical jungle vault</span> where <span className="highlight">failed memecoins</span> go to decompose into pure, <span className="highlight">radioactive liquidity</span>.
              </p>
              <div className="divider"></div>
              <p className="fade-slide-in" style={{ animationDelay: '0.3s' }}>
                It's not grown or cooked — it's condensed from <span className="highlight">raw greed</span>, bad decisions, and chart-watching at 3 a.m.
              </p>
              <div className="divider"></div>
              <p className="fade-slide-in" style={{ animationDelay: '0.5s' }}>
                Ancient degens discovered that when you grind <span className="highlight">hopium, memes, and broken promises</span> together, it turns bright green.
              </p>
              <div className="divider"></div>
              <p className="fade-slide-in" style={{ animationDelay: '0.7s' }}>
                The powder glows because it's fueled by <span className="highlight">unrealized gains and unrealized morals</span>.
              </p>
              <div className="divider"></div>
              <p className="fade-slide-in" style={{ animationDelay: '0.9s' }}>
                One sniff doesn't get you high — it gives you the confidence to <span className="highlight">buy the top</span>.
              </p>
              <div className="divider"></div>
              <p className="fade-slide-in" style={{ animationDelay: '1.1s' }}>
                Legends say the supply only increases when someone tweets "<span className="highlight">this is going to zero</span>."
              </p>
              <div className="divider"></div>
              <p className="fade-slide-in" style={{ animationDelay: '1.3s' }}>
                No one knows who makes it, but everyone thinks they found it first.
              </p>
              <div className="divider"></div>
              <p className="fade-slide-in" style={{ animationDelay: '1.5s' }}>
                Green Cocaine isn't a drug — it's a <span className="highlight">lifestyle mistake</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <div className="image-glow"></div>
          <img src={imageSrc} alt="Green Cocaine" className="content-image floating" />
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-text">
          CA: <span className="contract-address" onClick={copyToClipboard} title="Click to copy">
            {contractAddress}
            {copied && <span className="copied-message"> ✓ Copied!</span>}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
