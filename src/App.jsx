import { useState } from 'react'
import Application from './Application';
import AppForm from './AppForm';
import { Link } from './Link';
import { useCurrentPath } from './useCurrentPath';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const currentPath = useCurrentPath();
  console.log('Current URL path:', currentPath); // Debugging log


  return (
    <>
    <header>
        <h1>Job Application History</h1>
        <nav>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#new">New</Link>
                </li>
                <li>
                  <Link to="#memo">Memo</Link>
                </li>
            </ul>
        </nav>
    </header>
     <main>
        <section id="home">
            <div id="article-list">
              <Application />
            </div>
        </section>

        <section id="new">
            {(currentPath === '#new') && (
            <AppForm />
            )}

            <div id="application_memo_list">
                
            </div>
        </section>

        <section id="memo">
            <div id="memo-list">
                <article>
                    <form action="" method="post" id="new_memo_form" />
                        <div>
                            <label for="job_application">Job Application:</label>
                            <select id="job_application" name="job_application">

                            </select>
                        </div>
                        <div>
                            <label for="memo_content">Memo:</label>
                            <textarea id="memo_content" name="memo_content" required></textarea>
                        </div>

                        <div>
                            <button type="submit">Add Memo</button>
                            <button type="button" id="cancel_memo_button">Cancel</button>
                        </div>
                </article>
            </div>

        </section>
    </main>

    <aside>
        <input type="text" id="search_input" placeholder="Search by company or job title..." />
    </aside>

    <footer>
        <div class="container">
            <p>&copy; 2026 Job Application History. All rights reserved.</p>
        </div>
    </footer>
      {/*

    
      <section id="center">
        <div className="hero">
        
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      */}
    </>
  )
}

export default App
