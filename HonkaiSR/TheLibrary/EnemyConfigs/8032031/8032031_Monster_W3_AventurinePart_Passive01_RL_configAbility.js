const configAbility = {
  "fileName": "8032031_Monster_W3_AventurinePart_Passive01_RL",
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1321309283\">Monster_W3_AventurinePart_SpeedZero_RL</a>[<span class=\"descriptionNumberColor\">Forever Concealed</span>]"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "W3_AventurinePart_00_RL",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "references": []
}