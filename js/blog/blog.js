import { fetchAndRenderItems } from './renderItems.js';


export function BlogSection() {
    fetchAndRenderItems('js/json/datablog.json', 'slider-container');
  }
  