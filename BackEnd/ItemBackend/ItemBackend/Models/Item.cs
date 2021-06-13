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
        [Required, Display(Name = "Name")]
        public string Name { get; set; }
        [Display(Name = "Description")]
        public string Description { get; set; }
        [Required, Display(Name = "TimeOfAdding")]
        public DateTime TimeOfAddition { get; set; }
    }
}
