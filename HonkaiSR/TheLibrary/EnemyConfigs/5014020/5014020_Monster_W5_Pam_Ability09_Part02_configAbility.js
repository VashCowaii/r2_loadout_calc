const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1250511369\">Monster_W5_Pam_SummonedMinions_monitor</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_dirty_part_num",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}