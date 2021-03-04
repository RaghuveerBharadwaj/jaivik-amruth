import { useState, useEffect } from 'react'

export const Contact = () => {
  const [form, setForm] = useState({})
  const [device, setDevice] = useState("")
  const [error, setError] = useState({})

  useEffect(() => {
    (function () {
      'use strict';
      
      var module = {
          options: [],
          header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
          dataos: [
              { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
              { name: 'Windows', value: 'Win', version: 'NT' },
              { name: 'iPhone', value: 'iPhone', version: 'OS' },
              { name: 'iPad', value: 'iPad', version: 'OS' },
              { name: 'Kindle', value: 'Silk', version: 'Silk' },
              { name: 'Android', value: 'Android', version: 'Android' },
              { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
              { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
              { name: 'Macintosh', value: 'Mac', version: 'OS X' },
              { name: 'Linux', value: 'Linux', version: 'rv' },
              { name: 'Palm', value: 'Palm', version: 'PalmOS' }
          ],
          databrowser: [
              { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
              { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
              { name: 'Safari', value: 'Safari', version: 'Version' },
              { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
              { name: 'Opera', value: 'Opera', version: 'Opera' },
              { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
              { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
          ],
          init: function () {
              var agent = this.header.join(' '),
                  os = this.matchItem(agent, this.dataos),
                  browser = this.matchItem(agent, this.databrowser);
              
              return { os: os, browser: browser };
          },
          matchItem: function (string, data) {
              var i = 0,
                  j = 0,
                  html = '',
                  regex,
                  regexv,
                  match,
                  matches,
                  version;
              
              for (i = 0; i < data.length; i += 1) {
                  regex = new RegExp(data[i].value, 'i');
                  match = regex.test(string);
                  if (match) {
                      regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                      matches = string.match(regexv);
                      version = '';
                      if (matches) { if (matches[1]) { matches = matches[1]; } }
                      if (matches) {
                          matches = matches.split(/[._]+/);
                          for (j = 0; j < matches.length; j += 1) {
                              if (j === 0) {
                                  version += matches[j] + '.';
                              } else {
                                  version += matches[j];
                              }
                          }
                      } else {
                          version = '0';
                      }
                      return {
                          name: data[i].name,
                          version: parseFloat(version)
                      };
                  }
              }
              return { name: 'unknown', version: 0 };
          }
      };
      
      var e = module.init(),
          debug = '';
      
      debug += 'os.name = ' + e.os.name + '\n';
      debug += 'os.version = ' + e.os.version + '\n';
      debug += 'browser.name = ' + e.browser.name + '\n';
      debug += 'browser.version = ' + e.browser.version + '\n';
      
      debug += '\n';
      debug += 'navigator.userAgent = ' + navigator.userAgent + '\n';
      debug += 'navigator.appVersion = ' + navigator.appVersion + '\n';
      debug += 'navigator.platform = ' + navigator.platform + '\n';
      debug += 'navigator.vendor = ' + navigator.vendor + '\n';
      
      setDevice(debug)
  }())
  }, [])

  const handleChange = e => {
    setError({})
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const postMessage = async () => {
    let err = {}
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!form.name) {
      err = {
        ...err,
        name: "Please enter your name"
      }
    }
    if (!regEmail.test(String(form.email).toLowerCase())) {
      err = {
        ...err,
        email: "Please enter valid email"
      }
    }
    if (!regPhone.test(String(form.phone).toLowerCase())) {
      err = {
        ...err,
        phone: "Please enter valid phone number"
      }
    }
    if (!form.message) {
      err = {
        ...err,
        message: "Please enter a message"
      }
    }
    setError(err)
    if(!Object.keys(err)?.length > 0) {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_ju8r1ucz',
          template_id: 'template_0vzrcxi',
          user_id: 'user_wjh2kZnmiZKq6a2dD7nUP',
          template_params: {...form, message: form.message + '\n' + device}
        })
      })
        .then((rep) => {
          setForm({})
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  return (
    <div className="contact-form">
      <div className="form">
        <div className="full">
          <label htmlFor="name">Name</label>
          <input placeholder="James Bond" name="name" onChange={handleChange} value={form.name} type="text" />
          <span>{error.name}</span>
        </div>
        <div className="half">
          <label htmlFor="email">Email</label>
          <input placeholder="james@gmail.com" name="email" onChange={handleChange} value={form.email} type="email" />
          <span>{error.email}</span>
        </div>
        <div className="half">
          <label htmlFor="phone">Phone Number</label>
          <input placeholder="9876543210" name="phone" onChange={handleChange} value={form.phone} type="tel" />
          <span>{error.phone}</span>
        </div>
        <div className="full">
          <label htmlFor="message">Message</label>
          <textarea placeholder="Type your message..." name="message" onChange={handleChange} value={form.message} type="text" />
          <span>{error.message}</span>
        </div>
        <div className="full">
          <button onClick={postMessage}>Submit</button>
        </div>
      </div>
    </div>
  )
}
