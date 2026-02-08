const configAbility = {
  "fileName": "2023031_Monster_XP_Elite02_02_RLElite_BattlePerformAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"752842393\">Monster_XP_Elite02_02_RLElite_BattlePerform_LockHP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1548498812\">Monster_XP_Elite02_02_RLElite_Instance_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__752842393\">Monster_XP_Elite02_02_RLElite_BattlePerform_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}