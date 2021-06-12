using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ItemBackend.Models
{
    public class Item
    {
        [Required, Display(Name = "Id")]
        public int Id { get; set; }
        [Required, Display(Name = "Item name")]
        public string Name { get; set; }
        [Display(Name = "Item description")]
        public string Description { get; set; }
        [Required, Display(Name = "Item addition date")]
        public DateTime TimeOfAddition { get; set; }
    }
}
