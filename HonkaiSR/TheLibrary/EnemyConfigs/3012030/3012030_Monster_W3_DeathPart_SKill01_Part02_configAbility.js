const configAbility = {
  "fileName": "3012030_Monster_W3_DeathPart_SKill01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{MZM: Unselectable Part}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-804634083\">Death_Control_Modifier</a>"
    }
  ],
  "references": []
}