using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital_Management.Models
{
    public class PtSymtomp
    {
        public int PtSymtompId { get; set; }
        [ForeignKey("InPtPrescription")]
        public int InPtPrescriptionId { get; set; }
        public string Instruction { get; set; }
        public DateTime Date { get; set; }
    }
}
