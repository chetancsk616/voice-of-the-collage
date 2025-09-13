import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

// Vanilla JS Modal Component (matching reference)
class Modal {
  constructor(options) {
    this.options = Object.assign({
      ariaLabel: 'Dialog',
      closeOnEsc: true,
      closeOnOverlay: true
    }, options);
    this._init();
  }
  _init() {
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-label', this.options.ariaLabel);
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay';
    this.overlay.tabIndex = -1;
    this.content = document.createElement('div');
    this.content.className = 'modal-content';
    this.modal.appendChild(this.content);
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.modal);
    this._bindEvents();
    this.hide();
    this._outsideClickHandler = (e) => {
      if (!this.modal.contains(e.target) && this.isOpen() && this._isPopover) {
        this.hide();
      }
    };
  }
  _bindEvents() {
    this.overlay.addEventListener('click', () => {
      if (this.options.closeOnOverlay) this.hide();
    });
    document.addEventListener('keydown', (e) => {
      if (this.options.closeOnEsc && e.key === 'Escape' && this.isOpen()) {
        this.hide();
      }
    });
  }
  show(html, opts = {}) {
    this.content.innerHTML = html;
    const posTarget = opts.positionTarget || null;
    if (posTarget) {
      this._isPopover = true;
      this.overlay.style.display = 'none';
      this.modal.classList.add('modal-popover');
      this.modal.style.position = 'absolute';
      const popWidth = (opts.popWidth && Number(opts.popWidth)) ? Number(opts.popWidth) : 280;
      this.modal.style.width = popWidth + 'px';
      this.modal.style.display = 'block';
      try { posTarget.scrollIntoView({block: 'nearest', inline: 'nearest'}); } catch(e) {}
      const rect = posTarget.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const top = rect.bottom + scrollY + 8;
      let calcLeft = Math.round(rect.left + (rect.width / 2) - (popWidth / 2));
      if (calcLeft < 8) calcLeft = 8;
      if (calcLeft + popWidth > window.innerWidth - 8) calcLeft = window.innerWidth - popWidth - 8;
      this.modal.style.top = top + 'px';
      this.modal.style.left = calcLeft + 'px';
      this.modal.style.visibility = 'visible';
      this.modal.style.zIndex = 1400;
      this.modal.style.pointerEvents = 'auto';
      setTimeout(() => document.addEventListener('click', this._outsideClickHandler), 0);
    } else {
      this._isPopover = false;
      this.overlay.style.display = 'block';
      this.modal.classList.remove('modal-popover');
      this.modal.style.position = '';
      this.modal.style.left = '';
      this.modal.style.top = '';
      this.modal.style.display = 'block';
    }
    this._trapFocus();
  }
  hide() {
    this.overlay.style.display = 'none';
    this.modal.style.display = 'none';
    if (this._isPopover) {
      document.removeEventListener('click', this._outsideClickHandler);
      this._isPopover = false;
    }
  }
  isOpen() {
    return this.modal.style.display === 'block';
  }
  _trapFocus() {
    const focusable = Array.from(this.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    if (focusable.length) focusable[0].focus();
    const keyHandler = (e) => {
      if (e.key === 'Tab') {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    if (this._keyHandler) document.removeEventListener('keydown', this._keyHandler);
    this._keyHandler = keyHandler;
    document.addEventListener('keydown', this._keyHandler);
  }
}

/* Collapsible component */
function Collapsible({ buttonLabel, children, onOpenModal }) {
  const [open, setOpen] = useState(true);
  const contentRef = useRef();

  const toggle = () => {
    setOpen((v) => {
      const next = !v;
      if (next && contentRef.current) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
      } else if (contentRef.current) {
        contentRef.current.style.maxHeight = "0px";
      }
      return next;
    });
  };

  useEffect(() => {
    if (open && contentRef.current) contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
  }, []);

  return (
    <div style={{ marginBottom: 16 }}>
      <button
        className={`collapsible ${open ? "active" : ""}`}
        aria-expanded={open}
        aria-controls="collapsibleContent"
        onClick={toggle}
      >
        {buttonLabel}
      </button>
      <div id="collapsibleContent" className="content-collapsible" ref={contentRef}>
        <div style={{ padding: "12px 0", color: "var(--text-secondary)" }}>
          {children}
          <div style={{ marginTop: 8 }}>
            <button id="openModalBtn" className="cta-button" onClick={(e) => onOpenModal(e.currentTarget)}>Open Modal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Tabs */
function Tabs() {
  const [active, setActive] = useState(0);
  const panels = ["Content for Tab A", "Content for Tab B", "Content for Tab C"];
  return (
    <div style={{ marginBottom: 18 }}>
      <div className="tablist" role="tablist" aria-label="Demo Tabs" style={{ justifyContent: "center" }}>
        {["Tab A", "Tab B", "Tab C"].map((t, i) => (
          <button
            key={t}
            className="tab"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="tabpanel" role="tabpanel" aria-hidden={false} style={{ textAlign: "center", background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "0 6px 6px 6px" }}>
        {panels[active]}
      </div>
    </div>
  );
}

/* Carousel */
function Carousel() {
  const slides = ["Slide 1", "Slide 2", "Slide 3"];
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <div id="carousel-demo" tabIndex="0" style={{ position: "relative", maxWidth: 400, margin: "0 auto" }}>
      {slides.map((s, i) => (
        <div key={i} className="slide" aria-hidden={i !== idx ? "true" : "false"} style={{ display: i === idx ? "block" : "none", background: i === 0 ? "var(--gradient-1)" : i === 1 ? "var(--gradient-2)" : "var(--gradient-3)", padding: "2rem", textAlign: "center", borderRadius: "12px", color: "#fff" }}>
          {s}
        </div>
      ))}
      <button className="carousel-prev" aria-label="Previous slide" onClick={prev} style={{ left: -12 }}>&#8592;</button>
      <button className="carousel-next" aria-label="Next slide" onClick={next} style={{ right: -12 }}>&#8594;</button>
    </div>
  );
}

/* UIComponents wrapper - handles modal open/popover anchor passing */
export default function UIComponents() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalInstance = new Modal({ ariaLabel: 'Demo Modal' });
    setModal(modalInstance);
    window.ModalInstance = modalInstance; // For close button
    return () => {
      // Cleanup if needed
    };
  }, []);

  function openPopover(target) {
    if (modal) {
      modal.show(
        '<div style="min-width:200px"><h3 style="margin:0 0 8px 0;font-size:1.05rem;">Quick Alert</h3><div style="margin-bottom:0.6rem;color:var(--text-secondary);">This modal was opened from the collapsible content.</div><div style="text-align:right;"><button onclick="window.ModalInstance.hide()" class="cta-button" style="padding:0.4rem 0.8rem;font-size:0.95rem;">Close</button></div></div>',
        { positionTarget: target }
      );
    }
  }

  return (
    <section className="fade-section demo-section" id="ui-components">
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>Next-Gen Interactive Experience</h2>
      <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
        Discover the advanced features that make Voice of the College truly interactive and accessible.
      </p>

      <Collapsible buttonLabel="Features & Alerts" onOpenModal={openPopover}>
        <p style={{ margin: 0 }}>Tap to reveal quick actions and important alerts. You can open a focused modal from here.</p>
      </Collapsible>

      <div style={{ marginBottom: 16 }}>
        <Tabs />
      </div>

      <div style={{ marginBottom: 8 }}>
        <Carousel />
      </div>
    </section>
  );
}

