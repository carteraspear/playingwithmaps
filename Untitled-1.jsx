export default function Widget() {
  return (
      
      
      <div className="flex flex-col h-screen bg-background">
        <header className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
          <div className="flex items-center">
            <img undefinedhidden="true" alt="sniffies-logo" src="https://openui.fly.dev/openui/24x24.svg?text=🐾" />
            <span className="ml-2 text-lg">sniffies</span>
          </div>
          <span className="text-sm">At Poinsettia Park</span>
          <div className="flex items-center">
            <button className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
              <span className="material-icons">add</span>
            </button>
            <button className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
              <span className="material-icons">remove</span>
            </button>
          </div>
        </header>
        <main className="flex-grow bg-muted">
          <img undefinedhidden="true" alt="map-placeholder" src="https://openui.fly.dev/openui/600x400.svg" className="w-full h-full object-cover" />
        </main>
        <footer className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
          <div className="flex space-x-4">
            <button className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
              <span className="material-icons">flight</span>
            </button>
            <button className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
              <span className="material-icons">visibility</span>
            </button>
            <button className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
              <span className="material-icons">settings</span>
            </button>
            <button className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
              <span className="material-icons">fullscreen</span>
            </button>
          </div>
          <button className="p-2 bg-accent text-accent-foreground rounded-full hover:bg-accent/80">PLUS</button>
        </footer>
      </div>
      
      
  )
}