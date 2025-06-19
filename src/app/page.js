"use client"
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Info Modal Component
const SpotifyCredentialsModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#181818] rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#282828] shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1db954] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">Get Your Spotify Credentials</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-[#b3b3b3] hover:text-white transition-colors p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#1db954] rounded-full flex items-center justify-center text-black text-sm font-bold">1</span>
                    <h3 className="text-lg font-semibold text-white">Create a Spotify App</h3>
                  </div>
                  <div className="ml-8 space-y-2">
                    <p className="text-[#b3b3b3]">Visit the Spotify Developer Dashboard:</p>
                    <a 
                      href="https://developer.spotify.com/dashboard" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1db954] hover:text-[#1ed760] transition-colors"
                    >
                      https://developer.spotify.com/dashboard
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-[#b3b3b3]">Log in with your Spotify account and click <span className="text-white font-medium">"Create an App"</span></p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#1db954] rounded-full flex items-center justify-center text-black text-sm font-bold">2</span>
                    <h3 className="text-lg font-semibold text-white">Configure Your App</h3>
                  </div>
                  <div className="ml-8 space-y-3">
                    <div className="bg-[#121212] rounded-lg p-4 border border-[#282828]">
                      <p className="text-[#b3b3b3] mb-2">Fill in the app details:</p>
                      <ul className="space-y-1 text-sm">
                        <li className="text-[#b3b3b3]">• <span className="text-white">App Name:</span> Any name you like</li>
                        <li className="text-[#b3b3b3]">• <span className="text-white">App Description:</span> File encoding tool</li>
                        <li className="text-[#b3b3b3]">• <span className="text-white">Redirect URI:</span> <code className="bg-[#282828] px-2 py-1 rounded text-[#1db954]">http://localhost:3000</code></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#1db954] rounded-full flex items-center justify-center text-black text-sm font-bold">3</span>
                    <h3 className="text-lg font-semibold text-white">Get Your Credentials</h3>
                  </div>
                  <div className="ml-8 space-y-2">
                    <p className="text-[#b3b3b3]">Once your app is created, you'll see:</p>
                    <div className="bg-[#121212] rounded-lg p-4 border border-[#282828] space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">Client ID:</span>
                        <span className="text-[#b3b3b3]">Copy this directly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">Client Secret:</span>
                        <span className="text-[#b3b3b3]">Click "Show client secret" to reveal</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#1db954] rounded-full flex items-center justify-center text-black text-sm font-bold">4</span>
                    <h3 className="text-lg font-semibold text-white">Add Yourself as a User</h3>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="bg-[#e22134]/10 border border-[#e22134] rounded-lg p-4">
                      <p className="text-[#e22134] font-medium mb-2">⚠️ Important Step</p>
                      <p className="text-[#b3b3b3] text-sm">
                        In your app's dashboard, go to <span className="text-white font-medium">"User Management"</span> and add your own email address. 
                        Spotify requires users to be explicitly registered to access protected endpoints in development mode.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="bg-[#1db954]/10 border border-[#1db954] rounded-lg p-4">
                  <p className="text-[#1db954] font-medium mb-2">💡 Pro Tips</p>
                  <ul className="text-[#b3b3b3] text-sm space-y-1">
                    <li>• Keep your Client Secret private - never share it publicly</li>
                    <li>• The Redirect URI must match exactly (including the port)</li>
                    <li>• You can add multiple redirect URIs if needed</li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-[#282828]">
                <button
                  onClick={onClose}
                  className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-3 px-6 rounded-full transition-colors duration-200"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  const [file, setFile] = useState(null);
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [error, setError] = useState("");
  const [decodeUrl, setDecodeUrl] = useState("");
  const [decodeLoading, setDecodeLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentXhr, setCurrentXhr] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [decodeStartTime, setDecodeStartTime] = useState(null);
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [redirectUri, setRedirectUri] = useState("http://localhost:3000");
  const [showCredentialsModal, setShowCredentialsModal] = useState(false);

  const loadingMessages = [
    { time: 0, message: "🎵 Decoding your Spotify playlist..." },
    { time: 3000, message: "🔍 Reading through those sweet track mappings..." },
    { time: 7000, message: "⏳ This is taking a while... patience, young padawan!" },
    { time: 12000, message: "😅 Still working on it... maybe grab a coffee?" },
    { time: 18000, message: "🎬 Oh hey, while we're here, you should subscribe to my channel! 😉" },
    { time: 25000, message: "🐢 Good things come to those who wait..." },
    { time: 35000, message: "🎪 Fun fact: Spotify has over 100 million songs!" },
    { time: 45000, message: "🚀 Almost there... probably... maybe..." },
    { time: 60000, message: "🎯 This file must be REALLY encoded well!" }
  ];

  // Check for auth token in URL and localStorage on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    const errorFromUrl = urlParams.get('error');
    const codeFromUrl = urlParams.get('code'); // Spotify OAuth code
    
    if (tokenFromUrl) {
      setAuthToken(tokenFromUrl);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (codeFromUrl) {
      // Handle Spotify OAuth callback
      handleSpotifyCallback(codeFromUrl);
    } else {
      // Note: localStorage is not available in this environment, using state instead
      // const savedToken = null; // localStorage.getItem('spotify_auth_token');
      // if (savedToken) {
      //   setAuthToken(savedToken);
      // }
    }
    
    if (errorFromUrl) {
      setError(`Authentication failed: ${urlParams.get('message') || 'Unknown error'}`);
    }
  }, []);

  const handleSpotifyCallback = async (code) => {
    try {
      setAuthLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/callback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });

      if (response.ok) {
        const data = await response.json();
        setAuthToken(data.token);
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        const errorData = await response.json();
        setError(`Authentication failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (err) {
      setError(`Authentication error: ${err.message}`);
    } finally {
      setAuthLoading(false);
    }
  };

  // Check auth status when token changes
  useEffect(() => {
    if (authToken) {
      checkAuthStatus();
      // localStorage.setItem('spotify_auth_token', authToken);
    } else {
      setAuthLoading(false);
    }
  }, [authToken]);

  // Backend API base URL - change this to match your backend server
  const API_BASE_URL = 'https://spotmyfilesbackend.onrender.com'; // Change this if your backend runs on a different port

  const checkAuthStatus = async () => {
    if (!authToken) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/auth/status`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setUser(data.user);
      } else {
        // Token is invalid
        setAuthToken(null);
        // localStorage.removeItem('spotify_auth_token');
        setIsAuthenticated(false);
      }
    } catch (err) {
      setError(`Failed to check authentication status: ${err.message}`);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!clientId || !clientSecret) {
      setError("Please enter both Client ID and Client Secret");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri
        })
      });
  
      const data = await response.json();
      window.location.href = data.auth_url;
    } catch (err) {
      setError(`Failed to initiate login: ${err.message}`);
    }
  };
  

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    } catch (err) {
      // Continue with logout even if request fails
    } finally {
      setAuthToken(null);
      // localStorage.removeItem('spotify_auth_token');
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const makeAuthenticatedRequest = async (url, options = {}) => {
    const headers = {
      ...options.headers,
      'Authorization': `Bearer ${authToken}`
    };
    
    const response = await fetch(url, {
      ...options,
      headers
    });
    
    if (response.status === 401) {
      // Token expired, logout user
      handleLogout();
      throw new Error('Session expired. Please log in again.');
    }
    
    return response;
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
    setResultUrl("");
  };

  const handleSubmit = async () => {
    if (!file || !playlistUrl) {
      setError("Please select a file and enter a playlist URL");
      return;
    }

    setLoading(true);
    setError("");
    setResultUrl("");

    try {
      const fileBytes = await file.arrayBuffer();
      const response = await makeAuthenticatedRequest(`${API_BASE_URL}/encode`, {
        method: 'POST',
        headers: {
          'X-Playlist-URL': playlistUrl,
          'X-Filename': file.name,
          'Content-Type': 'application/octet-stream'
        },
        body: fileBytes
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setResultUrl(result.playlistUrl);
    } catch (err) {
      setError(err.message || 'Failed to encode file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDecode = () => {
    if (!decodeUrl) {
      setError("Please enter a playlist URL to decode");
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_BASE_URL}/decode`, true);
    xhr.responseType = "blob";
    xhr.setRequestHeader("Authorization", `Bearer ${authToken}`);

    setCurrentXhr(xhr);
    setProgress(0);
    setDecodeLoading(true);
    setError("");
    setDecodeStartTime(Date.now());
    setLoadingMessage(loadingMessages[0].message);

    const messageTimeouts = [];
    loadingMessages.forEach((msg, index) => {
      if (index > 0) {
        const timeout = setTimeout(() => {
          setLoadingMessage(msg.message);
        }, msg.time);
        messageTimeouts.push(timeout);
      }
    });

    let simulatedProgress = 0;
    let realProgressStarted = false;
    let simulationInterval;
    
    const simulateProgress = () => {
      if (!realProgressStarted && simulatedProgress < 75) {
        simulatedProgress += Math.random() * 8;
        setProgress(Math.min(simulatedProgress, 75));
      }
    };
    
    simulationInterval = setInterval(simulateProgress, 400);

    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        realProgressStarted = true;
        clearInterval(simulationInterval);
        const percent = (event.loaded / event.total) * 100;
        setProgress(percent);
        
        if (percent > 90) {
          setLoadingMessage("🎉 Almost done! Preparing your file...");
        } else if (percent > 50) {
          setLoadingMessage("📦 Halfway there! Keep going...");
        }
      }
    };

    xhr.onload = () => {
      messageTimeouts.forEach(clearTimeout);
      clearInterval(simulationInterval);
      
      if (xhr.status === 200) {
        const blob = xhr.response;
        const disposition = xhr.getResponseHeader("Content-Disposition");
        const match = disposition && disposition.match(/filename="?([^"]+)"?/);
        const filename = match?.[1] || "decoded_file.bin";

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);

        setProgress(100);
        setLoadingMessage("✅ Success! Your file is downloading!");
        
        setTimeout(() => {
          setDecodeLoading(false);
          setProgress(0);
          setCurrentXhr(null);
          setLoadingMessage("");
        }, 2000);
      } else if (xhr.status === 401) {
        handleLogout();
        setError("Session expired. Please log in again.");
      } else {
        setError(`Decode failed: ${xhr.status} ${xhr.statusText}`);
        setDecodeLoading(false);
        setProgress(0);
        setCurrentXhr(null);
        setLoadingMessage("");
      }
    };

    xhr.onerror = () => {
      messageTimeouts.forEach(clearTimeout);
      clearInterval(simulationInterval);
      setError("Network error during decode. Please check your connection.");
      setDecodeLoading(false);
      setProgress(0);
      setCurrentXhr(null);
      setLoadingMessage("");
    };

    xhr.onabort = () => {
      messageTimeouts.forEach(clearTimeout);
      clearInterval(simulationInterval);
      setError("Decode was cancelled by user.");
      setDecodeLoading(false);
      setProgress(0);
      setCurrentXhr(null);
      setLoadingMessage("");
    };

    xhr.ontimeout = () => {
      messageTimeouts.forEach(clearTimeout);
      clearInterval(simulationInterval);
      setError("Decode request timed out. Please try again.");
      setDecodeLoading(false);
      setProgress(0);
      setCurrentXhr(null);
      setLoadingMessage("");
    };

    xhr.timeout = 120000;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ playlist_url: decodeUrl }));
  };

  const handleCancelDecode = () => {
    if (currentXhr) {
      currentXhr.abort();
      setCurrentXhr(null);
    }
  };

  if (authLoading) {
    return (
      <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-800 border-t-[#1db954] mx-auto mb-6"></div>
          <p className="text-[#b3b3b3] text-lg">Checking authentication...</p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center gap-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#1db954] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-black mb-4 tracking-tight">SpotMyFiles</h1>
          <p className="text-[#b3b3b3] text-lg mb-4">Convert any file into a Spotify playlist</p>
          <p className="text-[#b3b3b3] text-lg mb-3">
  Created by{" "}
  <a 
    href="https://www.youtube.com/@Deermageddon" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#1db954] hover:text-[#1ed760] underline"
  >
    Deermageddon
  </a>
</p>
          <p className="text-white text-base font-medium">You need to sign in with Spotify to use this tool</p>
        </div>

        <div className="w-full max-w-sm bg-[#121212] rounded-lg p-8 border border-[#282828]">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-3 text-white">Connect Your Account</h2>
            <p className="text-[#b3b3b3] text-sm mb-6 leading-relaxed">
              This project needs access to a Spotify account to create and manage playlists for file encoding/decoding.
            </p>
            <div className="space-y-4 mb-6">
              {/* Client ID with Info Button */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <label className="text-sm font-medium text-white">Spotify Client ID</label>
                  <button
                    onClick={() => setShowCredentialsModal(true)}
                    className="text-[#b3b3b3] hover:text-[#1db954] transition-colors duration-200 group"
                    title="How to get Spotify credentials"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </button>
                </div>
                <Input
                  placeholder="Enter your Spotify Client ID"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-[#404040] text-white placeholder-[#b3b3b3] focus:border-[#1db954] focus:ring-1 focus:ring-[#1db954]"
                />
              </div>

              {/* Client Secret */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">Spotify Client Secret</label>
                <Input
                  placeholder="Enter your Spotify Client Secret"
                  value={clientSecret}
                  onChange={(e) => setClientSecret(e.target.value)}
                  type="password"
                  className="w-full bg-[#2a2a2a] border border-[#404040] text-white placeholder-[#b3b3b3] focus:border-[#1db954] focus:ring-1 focus:ring-[#1db954]"
                />
              </div>

              {/* Redirect URI */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">Redirect URI</label>
                <Input
                  placeholder="http://localhost:3000"
                  value={redirectUri}
                  onChange={(e) => setRedirectUri(e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-[#404040] text-white placeholder-[#b3b3b3] focus:border-[#1db954] focus:ring-1 focus:ring-[#1db954]"
                />
              </div>
            </div>
            <button 
             onClick={handleLogin}
             disabled={!clientId || !clientSecret}
             className="w-full bg-[#1db954] hover:bg-[#1ed760] disabled:bg-[#535353] disabled:text-[#b3b3b3] text-black font-bold py-4 px-6 rounded-full transition-colors duration-200 text-sm tracking-wide"
           >
             LOG IN WITH SPOTIFY
           </button>
         </div>
       </div>

       {/* Credentials Modal */}
       <SpotifyCredentialsModal 
         isOpen={showCredentialsModal} 
         onClose={() => setShowCredentialsModal(false)} 
       />

       {error && (
         <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="p-4 bg-[#e22134] rounded-lg text-white text-sm max-w-md text-center font-medium"
         >
           {error}
         </motion.div>
       )}
     </main>
   );
 }

 return (
   <main className="min-h-screen bg-black text-white p-6">
     <div className="max-w-2xl mx-auto space-y-8">
       {/* Header with user info */}
       <div className="flex justify-between items-center">
         <div>
           <h1 className="text-4xl font-black mb-2 tracking-tight">SpotMyFiles</h1>
           <p className="text-[#b3b3b3]">Convert any file into a Spotify playlist</p>
         </div>
         
         <div className="flex items-center gap-4">
           {user?.images?.[0] && (
             <img 
               src={user.images[0].url} 
               alt="Profile" 
               className="w-12 h-12 rounded-full border-2 border-[#282828]"
             />
           )}
           <div className="text-right">
             <p className="text-white font-medium">{user?.display_name}</p>
             <button 
               onClick={handleLogout}
               className="text-[#b3b3b3] hover:text-white text-sm transition-colors"
             >
               Sign Out
             </button>
           </div>
         </div>
       </div>

       {/* Encode Section */}
       <div className="bg-[#121212] rounded-lg p-6 border border-[#282828]">
         <h2 className="text-xl font-bold mb-6 text-white">Encode File</h2>
         
         <div className="space-y-6">
           <div>
             <label className="block text-sm font-medium text-white mb-3">
               Select File to Encode (max 10KB)
             </label>
             <div className="relative">
               <input 
                 type="file" 
                 onChange={handleFileChange}
                 className="block w-full text-sm text-[#b3b3b3] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-[#1db954] file:text-black hover:file:bg-[#1ed760] file:transition-colors file:cursor-pointer bg-[#2a2a2a] border border-[#404040] rounded-md p-3"
                 accept="*/*"
               />
             </div>
             {file && (
               <p className="text-[#b3b3b3] text-sm mt-2">
                 Selected: {file.name} ({Math.round(file.size / 1024 * 100) / 100} KB)
               </p>
             )}
           </div>

           <div>
             <label className="block text-sm font-medium text-white mb-3">
               Playlist URL
             </label>
             <input 
               type="url"
               placeholder="https://open.spotify.com/playlist/..."
               value={playlistUrl}
               onChange={(e) => setPlaylistUrl(e.target.value)}
               className="w-full bg-[#2a2a2a] border border-[#404040] rounded-md px-4 py-3 text-white placeholder-[#b3b3b3] focus:border-[#1db954] focus:outline-none focus:ring-1 focus:ring-[#1db954]"
             />
           </div>

           <button 
             onClick={handleSubmit} 
             disabled={loading || !file || !playlistUrl}
             className="w-full bg-[#1db954] hover:bg-[#1ed760] disabled:bg-[#535353] disabled:text-[#b3b3b3] text-black font-bold py-4 px-6 rounded-full transition-colors duration-200 text-sm tracking-wide"
           >
             {loading ? (
               <div className="flex items-center justify-center gap-2">
                 <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                 ENCODING...
               </div>
             ) : (
               "ENCODE FILE"
             )}
           </button>

           {resultUrl && (
             <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="p-4 bg-[#1db954]/10 border border-[#1db954] rounded-lg"
             >
               <p className="text-[#1db954] font-medium text-sm mb-2">✅ File encoded successfully!</p>
               <a 
                 href={resultUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-[#1db954] hover:text-[#1ed760] text-sm break-all underline"
               >
                 {resultUrl}
               </a>
             </motion.div>
           )}
         </div>
       </div>

       {/* Decode Section */}
       <div className="bg-[#121212] rounded-lg p-6 border border-[#282828]">
         <h2 className="text-xl font-bold mb-6 text-white">Decode File</h2>
         
         <div className="space-y-6">
           <div>
             <label className="block text-sm font-medium text-white mb-3">
               Playlist URL to Decode
             </label>
             <input 
               type="url"
               placeholder="https://open.spotify.com/playlist/..."
               value={decodeUrl}
               onChange={(e) => setDecodeUrl(e.target.value)}
               className="w-full bg-[#2a2a2a] border border-[#404040] rounded-md px-4 py-3 text-white placeholder-[#b3b3b3] focus:border-[#1db954] focus:outline-none focus:ring-1 focus:ring-[#1db954] disabled:opacity-50"
               disabled={decodeLoading}
             />
           </div>

           {decodeLoading && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="space-y-4"
             >
               <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                 <div 
                   className="bg-[#1db954] h-2 rounded-full transition-all duration-300"
                   style={{ width: `${progress}%` }}
                 ></div>
               </div>
               <div className="text-center">
                 <p className="text-white font-medium mb-1">
                   {Math.round(progress)}% Complete
                 </p>
                 <p className="text-[#b3b3b3] text-sm">{loadingMessage}</p>
               </div>
             </motion.div>
           )}

           <div className="flex gap-3">
             <button 
               onClick={handleDecode} 
               disabled={decodeLoading || !decodeUrl}
               className="flex-1 bg-[#1db954] hover:bg-[#1ed760] disabled:bg-[#535353] disabled:text-[#b3b3b3] text-black font-bold py-4 px-6 rounded-full transition-colors duration-200 text-sm tracking-wide"
             >
               {decodeLoading ? "DECODING..." : "DECODE FILE"}
             </button>
             
             {decodeLoading && (
               <button 
                 onClick={handleCancelDecode}
                 className="bg-transparent border-2 border-[#e22134] text-[#e22134] hover:bg-[#e22134] hover:text-white font-bold py-4 px-6 rounded-full transition-colors duration-200 text-sm tracking-wide"
               >
                 CANCEL
               </button>
             )}
           </div>
         </div>
       </div>

       {error && (
         <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="p-4 bg-[#e22134] rounded-lg text-white text-sm text-center font-medium"
         >
           {error}
         </motion.div>
       )}

       {/* Info Section */}
       <div className="bg-[#121212] bg-opacity-50 rounded-lg p-4 border border-[#282828] text-center">
         <p className="text-[#b3b3b3] text-sm mb-2">
           This project basically encodes files as Spotify playlist track orders and decodes them back to original files... so basically using cloud storage from Spotify :)
         </p>
         <p className="text-[#535353] text-xs">
           File size limit: 10KB • Supported: All file types
         </p>
       </div>
     </div>
   </main>
 );
}