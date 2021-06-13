using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ItemBackend.Models;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace ItemBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<ItemController> _logger;

        public ItemController(ILogger<ItemController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }
        
        [HttpGet]
        public List<Item> GetItems()
        {
            //_logger.LogDebug(string.Join(",", _context.Items.ToList()));
            return _context.Items.ToList();
        }

        [HttpPost("Post")]
        public IActionResult Create(JObject item)
        {
            _logger.LogDebug(item.ToString());
            var newItem = new Item
            {
                Name = (string)item.GetValue("itemName"),
                Description = (string)item.GetValue("itemDescription"),
                TimeOfAddition = DateTime.Now
            };
            _context.Items.Add(newItem);
            _context.SaveChanges();

            return Ok();
        }

        [HttpDelete("Delete")]
        public IActionResult Delete(int id)
        {
            Item item = _context.Items.Find(id);
            _context.Items.Remove(item);
            _context.SaveChanges();
            return Ok();
        }
    }
}
