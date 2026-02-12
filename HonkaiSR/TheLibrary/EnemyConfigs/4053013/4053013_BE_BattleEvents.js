const configAbility = {
  "fileName": "4053013_BE_BattleEvents",
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
      "ID": 20035,
      "team": "Neutral Team",
      "eventType": "Entity Selection",
      "abilityList": null,
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "hardLevelEvent": true,
      "actionDescription": "The target can select 1 character. Then, deals Ice DMG to the selected character and causes them to enter the \"Phantom Illusion\" state. In \"Phantom Illusion\" state, the target character and their summon are Departed. At the same time, summons \"Hallucinogenic Mermaid\" to replace the Departed character in battle. \"Hallucinogenic Mermaid\" is considered as a non-friendly target."
    },
    {
      "name": "Battle Event Construction",
      "ID": 20020,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_Monster_W4_Manta_BattleEvent"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        }
      ],
      "eventSpeed": 80,
      "hardLevelEvent": true
    }
  ],
  "references": []
}