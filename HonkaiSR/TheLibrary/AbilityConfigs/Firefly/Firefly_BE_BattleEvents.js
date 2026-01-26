const configAbility = {
  "fileName": "Firefly_BE_BattleEvents",
  "abilityType": "Char. B.Events",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Battle Event Construction",
      "ID": 11310,
      "team": "Player Team",
      "eventType": "Assist",
      "abilityList": [
        "Sam_PassiveAbility01_BattleEvent"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true,
      "barType": 1,
      "actionDescription": "While SAM is in the Complete Combustion state, gains Enhanced Basic ATK and Enhanced Skill. Increases this unit's SPD, Weakness Break Efficiency, and the Break DMG taken by enemy targets, lasting until the Complete Combustion countdown turn begins."
    }
  ],
  "references": []
}